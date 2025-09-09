// Document Pane Scroll Synchronization Script
// Paste this into your browser console to sync scrolling between two document panes

(function() {
    'use strict';
    
    // Auto-detection selectors (in order of priority)
    const COMMON_SELECTORS = [
        // Draftable specific
        '.document-pane',
        '.document-container',
        '.pane-content',
        
        // Generic document viewers
        '.document-viewer',
        '.doc-container',
        '.viewer-pane',
        '.content-pane',
        
        // Common scrollable containers
        '[class*="scroll"]',
        '[class*="pane"]',
        '[class*="document"]',
        '[class*="viewer"]',
        
        // Fallback to common patterns
        '.left-pane, .right-pane',
        '.panel-left, .panel-right',
        'iframe[src*="document"]'
    ];
    
    let leftPane = null;
    let rightPane = null;
    let isScrolling = false;
    let syncEnabled = true;
    
    // Function to find scrollable panes automatically
    function findScrollablePanes() {
        console.log('🔍 Auto-detecting scrollable panes...');
        
        for (const selector of COMMON_SELECTORS) {
            const elements = document.querySelectorAll(selector);
            
            if (elements.length >= 2) {
                // Check if elements are actually scrollable
                const scrollableElements = Array.from(elements).filter(el => {
                    const style = window.getComputedStyle(el);
                    const hasScroll = el.scrollHeight > el.clientHeight || 
                                    el.scrollWidth > el.clientWidth;
                    const canScroll = style.overflowY !== 'hidden' && 
                                    style.overflowX !== 'hidden';
                    return hasScroll && canScroll && el.offsetHeight > 100;
                });
                
                if (scrollableElements.length >= 2) {
                    console.log(`✅ Found scrollable panes with selector: ${selector}`);
                    return [scrollableElements[0], scrollableElements[1]];
                }
            }
        }
        
        // Fallback: look for any two large scrollable divs
        const allDivs = document.querySelectorAll('div');
        const largeDivs = Array.from(allDivs).filter(div => {
            return div.scrollHeight > div.clientHeight && 
                   div.offsetHeight > 200 && 
                   div.offsetWidth > 200;
        });
        
        if (largeDivs.length >= 2) {
            console.log('✅ Found scrollable panes using fallback method');
            return [largeDivs[0], largeDivs[1]];
        }
        
        return [null, null];
    }
    
    // Function to manually set panes using selectors
    function setPanes(leftSelector, rightSelector) {
        leftPane = document.querySelector(leftSelector);
        rightPane = document.querySelector(rightSelector);
        
        if (!leftPane) {
            console.error(`❌ Left pane not found with selector: ${leftSelector}`);
            return false;
        }
        
        if (!rightPane) {
            console.error(`❌ Right pane not found with selector: ${rightSelector}`);
            return false;
        }
        
        console.log('✅ Panes set manually:', { leftPane, rightPane });
        return true;
    }
    
    // Scroll synchronization function
    function syncScroll(sourcePane, targetPane) {
        if (isScrolling || !syncEnabled) return;
        
        isScrolling = true;
        
        try {
            // Calculate scroll ratios
            const sourceScrollTop = sourcePane.scrollTop;
            const sourceScrollLeft = sourcePane.scrollLeft;
            const sourceMaxScrollTop = Math.max(1, sourcePane.scrollHeight - sourcePane.clientHeight);
            const sourceMaxScrollLeft = Math.max(1, sourcePane.scrollWidth - sourcePane.clientWidth);
            
            const targetMaxScrollTop = Math.max(1, targetPane.scrollHeight - targetPane.clientHeight);
            const targetMaxScrollLeft = Math.max(1, targetPane.scrollWidth - targetPane.clientWidth);
            
            // Calculate proportional scroll positions
            const scrollTopRatio = sourceScrollTop / sourceMaxScrollTop;
            const scrollLeftRatio = sourceScrollLeft / sourceMaxScrollLeft;
            
            const targetScrollTop = Math.round(targetMaxScrollTop * scrollTopRatio);
            const targetScrollLeft = Math.round(targetMaxScrollLeft * scrollLeftRatio);
            
            // Apply synchronized scroll
            targetPane.scrollTop = targetScrollTop;
            targetPane.scrollLeft = targetScrollLeft;
            
        } catch (error) {
            console.error('❌ Error during scroll sync:', error);
        }
        
        // Reset flag after a short delay
        setTimeout(() => {
            isScrolling = false;
        }, 50);
    }
    
    // Add event listeners
    function addScrollListeners() {
        if (!leftPane || !rightPane) {
            console.error('❌ Cannot add listeners: panes not found');
            return false;
        }
        
        // Remove existing listeners to prevent duplicates
        removeScrollListeners();
        
        // Add scroll event listeners
        leftPane.addEventListener('scroll', () => syncScroll(leftPane, rightPane), { passive: true });
        rightPane.addEventListener('scroll', () => syncScroll(rightPane, leftPane), { passive: true });
        
        console.log('✅ Scroll synchronization enabled');
        return true;
    }
    
    // Remove event listeners
    function removeScrollListeners() {
        if (leftPane) {
            leftPane.removeEventListener('scroll', () => syncScroll(leftPane, rightPane));
        }
        if (rightPane) {
            rightPane.removeEventListener('scroll', () => syncScroll(rightPane, leftPane));
        }
    }
    
    // Toggle synchronization
    function toggleSync() {
        syncEnabled = !syncEnabled;
        console.log(syncEnabled ? '✅ Scroll sync enabled' : '⏸️ Scroll sync disabled');
        return syncEnabled;
    }
    
    // Main initialization
    function init() {
        console.log('🚀 Initializing scroll synchronization...');
        
        // Try auto-detection first
        [leftPane, rightPane] = findScrollablePanes();
        
        if (leftPane && rightPane) {
            if (addScrollListeners()) {
                console.log('🎉 Scroll synchronization is now active!');
                console.log('📝 Use scrollSync.toggle() to enable/disable');
                console.log('📝 Use scrollSync.setPanes("selector1", "selector2") for manual setup');
                return true;
            }
        } else {
            console.log('❌ Could not auto-detect panes. Use manual setup:');
            console.log('📝 scrollSync.setPanes(".left-selector", ".right-selector")');
            console.log('📝 Then call scrollSync.init() again');
        }
        
        return false;
    }
    
    // Expose global interface
    window.scrollSync = {
        init: init,
        setPanes: setPanes,
        toggle: toggleSync,
        enable: () => { syncEnabled = true; console.log('✅ Scroll sync enabled'); },
        disable: () => { syncEnabled = false; console.log('⏸️ Scroll sync disabled'); },
        status: () => {
            console.log(`Status: ${syncEnabled ? 'Enabled' : 'Disabled'}`);
            console.log('Left pane:', leftPane);
            console.log('Right pane:', rightPane);
        },
        destroy: () => {
            removeScrollListeners();
            leftPane = null;
            rightPane = null;
            delete window.scrollSync;
            console.log('🗑️ Scroll sync destroyed');
        }
    };
    
    // Auto-initialize
    init();
    
})();

// Usage Examples:
// 
// 1. Auto-detection (runs automatically):
//    - The script will try to find two scrollable panes automatically
//
// 2. Manual setup if auto-detection fails:
//    scrollSync.setPanes('.left-pane', '.right-pane');
//    scrollSync.init();
//
// 3. Control commands:
//    scrollSync.toggle()    // Enable/disable sync
//    scrollSync.enable()    // Enable sync
//    scrollSync.disable()   // Disable sync
//    scrollSync.status()    // Check current status
//    scrollSync.destroy()   // Remove all listeners and cleanup
//
// 4. Common selector patterns to try:
//    scrollSync.setPanes('.document-pane:first-child', '.document-pane:last-child');
//    scrollSync.setPanes('#left-document', '#right-document');
//    scrollSync.setPanes('[data-testid="left-pane"]', '[data-testid="right-pane"]');
//    scrollSync.setPanes('iframe:first-of-type', 'iframe:last-of-type');