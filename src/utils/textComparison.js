// // import { diffChars, diffWordsWithSpace, diffArrays, diffSentences } from "diff";
// // import { diff_match_patch } from 'diff-match-patch';

// // // export const compareDocuments = (leftText, rightText) => {
// // //   const diffs = diffChars(leftText, rightText);
// // //   const leftDiffs = [];
// // //   const rightDiffs = [];
// // //   let summary = { additions: 0, deletions: 0, changes: 0 };

// // //   diffs.forEach((diff) => {
// // //     if (diff.added) {
// // //       rightDiffs.push({ type: "insert", content: diff.value });
// // //       summary.additions++;
// // //     } else if (diff.removed) {
// // //       leftDiffs.push({ type: "delete", content: diff.value });
// // //       summary.deletions++;
// // //     } else {
// // //       leftDiffs.push({ type: "equal", content: diff.value });
// // //       rightDiffs.push({ type: "equal", content: diff.value });
// // //     }
// // //   });

// // //   summary.changes = summary.additions + summary.deletions;
// // //   return { leftDiffs, rightDiffs, summary };
// // // };

// // // // export const compareHtmlDocuments = (leftHtml, rightHtml) => {
// // // //   return new Promise((resolve) => {
// // // //     // Use setTimeout to prevent browser blocking
// // // //     setTimeout(() => {
// // // //       try {
// // // //         console.log('Starting optimized document comparison...');
        
// // // //         // Quick text comparison first
// // // //         const leftText = extractPlainText(leftHtml);
// // // //         const rightText = extractPlainText(rightHtml);

// // // //         if (leftText.trim() === rightText.trim()) {
// // // //           console.log('Documents are identical');
// // // //           resolve({
// // // //             leftDiffs: [{ type: "equal", content: leftHtml }],
// // // //             rightDiffs: [{ type: "equal", content: rightHtml }],
// // // //             summary: { additions: 0, deletions: 0, changes: 0 },
// // // //             detailed: { lines: [], tables: [], images: [] }
// // // //           });
// // // //           return;
// // // //         }

// // // //         console.log('Documents differ, performing mutual comparison...');
        
// // // //         // Perform mutual comparison with chunked processing
// // // //         const result = performMutualComparison(leftHtml, rightHtml);
// // // //         console.log('Comparison completed successfully');
// // // //         resolve(result);
        
// // // //       } catch (error) {
// // // //         console.error("Error during document comparison:", error);
// // // //         resolve({
// // // //           leftDiffs: [{ type: "equal", content: leftHtml }],
// // // //           rightDiffs: [{ type: "equal", content: rightHtml }],
// // // //           summary: { additions: 0, deletions: 0, changes: 0 },
// // // //           detailed: { lines: [], tables: [], images: [] },
// // // //         });
// // // //       }
// // // //     }, 10);
// // // //   });
// // // // };

// // // export const compareHtmlDocuments = (leftHtml, rightHtml) => {
// // //   return new Promise((resolve) => {
// // //     // Use setTimeout to prevent browser blocking
// // //     setTimeout(() => {
// // //       try {
// // //         console.log('Starting optimized document comparison...');
        
// // //         // Quick text comparison first
// // //         const leftText = extractPlainText(leftHtml);
// // //         const rightText = extractPlainText(rightHtml);

// // //         if (leftText.trim() === rightText.trim()) {
// // //           console.log('Documents are identical');
// // //           resolve({
// // //             leftDiffs: [{ type: "equal", content: leftHtml }],
// // //             rightDiffs: [{ type: "equal", content: rightHtml }],
// // //             summary: { additions: 0, deletions: 0, changes: 0 },
// // //             detailed: { lines: [], tables: [], images: [] }
// // //           });
// // //           return;
// // //         }

// // //         console.log('Documents differ, performing mutual comparison...');
        
// // //         // Perform mutual comparison with chunked processing
// // //         // First, apply block-level comparison
// // //         const { leftWithBlocks, rightWithBlocks, blockSummary } = 
// // //           applyMutualBlockComparison(leftHtml, rightHtml);

// // //         // Then apply table comparison
// // //         const { leftWithTables, rightWithTables, tableSummary } = 
// // //           applyMutualTableComparison(leftWithBlocks, rightWithBlocks);

// // //         // Apply word-level text comparison
// // //         const { leftFinal, rightFinal, textSummary } =
// // //           applyMutualWordLevelComparison(leftWithTables, rightWithTables);

// // //         const summary = {
// // //           additions: blockSummary.additions + tableSummary.additions + textSummary.additions,
// // //           deletions: blockSummary.deletions + tableSummary.deletions + textSummary.deletions,
// // //           changes: 0
// // //         };
// // //         summary.changes = summary.additions + summary.deletions;

// // //         const detailed = generateDetailedReport(leftHtml, rightHtml);

// // //         const result = {
// // //           leftDiffs: [{ type: "equal", content: leftFinal }],
// // //           rightDiffs: [{ type: "equal", content: rightFinal }],
// // //           summary,
// // //           detailed
// // //         };

// // //         console.log('Comparison completed successfully');
// // //         resolve(result);
        
// // //       } catch (error) {
// // //         console.error("Error during document comparison:", error);
// // //         resolve({
// // //           leftDiffs: [{ type: "equal", content: leftHtml }],
// // //           rightDiffs: [{ type: "equal", content: rightHtml }],
// // //           summary: { additions: 0, deletions: 0, changes: 0 },
// // //           detailed: { lines: [], tables: [], images: [] },
// // //         });
// // //       }
// // //     }, 10);
// // //   });
// // // };

// // // // Optimized mutual comparison
// // // const performMutualComparison = (leftHtml, rightHtml) => {
// // //   const leftDiv = htmlToDiv(leftHtml);
// // //   const rightDiv = htmlToDiv(rightHtml);

// // //   // Extract lines from both documents
// // //   const leftLines = extractDocumentLines(leftDiv);
// // //   const rightLines = extractDocumentLines(rightDiv);

// // //   console.log(`Comparing ${leftLines.length} vs ${rightLines.length} lines`);

// // //   // Perform line-by-line mutual comparison
// // //   const { leftProcessed, rightProcessed, summary } = performLineMutualComparison(leftLines, rightLines);

// // //   // Apply the processed content back to the divs
// // //   applyProcessedLinesToDiv(leftDiv, leftProcessed);
// // //   applyProcessedLinesToDiv(rightDiv, rightProcessed);

// // //   const detailed = generateSimpleDetailedReport(leftLines, rightLines);

// // //   return {
// // //     leftDiffs: [{ type: "equal", content: leftDiv.innerHTML }],
// // //     rightDiffs: [{ type: "equal", content: rightDiv.innerHTML }],
// // //     summary,
// // //     detailed
// // //   };
// // // };

// // // // Extract lines with their elements for processing
// // // const extractDocumentLines = (container) => {
// // //   const lines = [];
// // //   const elements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, div');
  
// // //   elements.forEach((element, index) => {
// // //     // Skip nested elements and tables
// // //     if (element.closest('table') || element.querySelector('p, h1, h2, h3, h4, h5, h6, li')) {
// // //       return;
// // //     }
    
// // //     const text = (element.textContent || '').trim();
// // //     const html = element.innerHTML || '';
    
// // //     lines.push({
// // //       element,
// // //       text,
// // //       html,
// // //       index,
// // //       tagName: element.tagName.toLowerCase(),
// // //       isEmpty: !text
// // //     });
// // //   });
  
// // //   return lines;
// // // };

// // // // Perform mutual line comparison with empty space highlighting
// // // const performLineMutualComparison = (leftLines, rightLines) => {
// // //   const leftProcessed = [];
// // //   const rightProcessed = [];
// // //   let additions = 0, deletions = 0;

// // //   // Create alignment between lines
// // //   const maxLines = Math.max(leftLines.length, rightLines.length);
  
// // //   for (let i = 0; i < maxLines; i++) {
// // //     const leftLine = leftLines[i];
// // //     const rightLine = rightLines[i];
    
// // //     if (leftLine && rightLine) {
// // //       // Both lines exist - compare content
// // //       if (leftLine.isEmpty && rightLine.isEmpty) {
// // //         // Both empty - no highlighting
// // //         leftProcessed.push({ ...leftLine, highlight: 'none' });
// // //         rightProcessed.push({ ...rightLine, highlight: 'none' });
// // //       } else if (leftLine.isEmpty && !rightLine.isEmpty) {
// // //         // Left empty, right has content - show as addition
// // //         leftProcessed.push({ 
// // //           ...leftLine, 
// // //           highlight: 'empty-space-added',
// // //           placeholderText: rightLine.text 
// // //         });
// // //         rightProcessed.push({ ...rightLine, highlight: 'added' });
// // //         additions++;
// // //       } else if (!leftLine.isEmpty && rightLine.isEmpty) {
// // //         // Left has content, right empty - show as deletion
// // //         leftProcessed.push({ ...leftLine, highlight: 'removed' });
// // //         rightProcessed.push({ 
// // //           ...rightLine, 
// // //           highlight: 'empty-space-removed',
// // //           placeholderText: leftLine.text 
// // //         });
// // //         deletions++;
// // //       } else if (areTextsEqual(leftLine.text, rightLine.text)) {
// // //         // Same content - no highlighting
// // //         leftProcessed.push({ ...leftLine, highlight: 'none' });
// // //         rightProcessed.push({ ...rightLine, highlight: 'none' });
// // //       } else {
// // //         // Different content - show as modified with word-level diff
// // //         const { leftHighlighted, rightHighlighted } = performWordLevelDiff(leftLine.html, rightLine.html);
// // //         leftProcessed.push({ 
// // //           ...leftLine, 
// // //           highlight: 'modified',
// // //           processedHtml: leftHighlighted 
// // //         });
// // //         rightProcessed.push({ 
// // //           ...rightLine, 
// // //           highlight: 'modified',
// // //           processedHtml: rightHighlighted 
// // //         });
// // //         additions++;
// // //         deletions++;
// // //       }
// // //     } else if (leftLine && !rightLine) {
// // //       // Only left line exists - show as removed
// // //       leftProcessed.push({ ...leftLine, highlight: 'removed' });
// // //       rightProcessed.push({ 
// // //         element: null, 
// // //         text: '', 
// // //         html: '', 
// // //         isEmpty: true, 
// // //         highlight: 'empty-space-removed',
// // //         placeholderText: leftLine.text,
// // //         tagName: leftLine.tagName 
// // //       });
// // //       deletions++;
// // //     } else if (!leftLine && rightLine) {
// // //       // Only right line exists - show as added
// // //       leftProcessed.push({ 
// // //         element: null, 
// // //         text: '', 
// // //         html: '', 
// // //         isEmpty: true, 
// // //         highlight: 'empty-space-added',
// // //         placeholderText: rightLine.text,
// // //         tagName: rightLine.tagName 
// // //       });
// // //       rightProcessed.push({ ...rightLine, highlight: 'added' });
// // //       additions++;
// // //     }
// // //   }

// // //   return {
// // //     leftProcessed,
// // //     rightProcessed,
// // //     summary: { additions, deletions, changes: additions + deletions }
// // //   };
// // // };

// // // // Apply processed lines back to the document
// // // const applyProcessedLinesToDiv = (container, processedLines) => {
// // //   // Clear existing content
// // //   container.innerHTML = '';
  
// // //   processedLines.forEach(line => {
// // //     let element;
    
// // //     if (line.element) {
// // //       // Use existing element
// // //       element = line.element.cloneNode(false);
// // //     } else {
// // //       // Create new element for placeholder
// // //       element = document.createElement(line.tagName || 'p');
// // //     }
    
// // //     // Apply highlighting classes
// // //     switch (line.highlight) {
// // //       case 'added':
// // //         element.classList.add('git-line-added');
// // //         element.innerHTML = line.processedHtml || line.html;
// // //         break;
// // //       case 'removed':
// // //         element.classList.add('git-line-removed');
// // //         element.innerHTML = line.processedHtml || line.html;
// // //         break;
// // //       case 'modified':
// // //         element.classList.add('git-line-modified');
// // //         element.innerHTML = line.processedHtml || line.html;
// // //         break;
// // //       case 'empty-space-added':
// // //         element.classList.add('git-line-placeholder', 'placeholder-added');
// // //         element.innerHTML = `<span style="color: #166534; font-style: italic; opacity: 0.8;">["${line.placeholderText?.substring(0, 50)}${line.placeholderText?.length > 50 ? '...' : ''}"]</span>`;
// // //         break;
// // //       case 'empty-space-removed':
// // //         element.classList.add('git-line-placeholder', 'placeholder-removed');
// // //         element.innerHTML = `<span style="color: #991b1b; font-style: italic; opacity: 0.8;">["${line.placeholderText?.substring(0, 50)}${line.placeholderText?.length > 50 ? '...' : ''}"]</span>`;
// // //         break;
// // //       default:
// // //         element.innerHTML = line.processedHtml || line.html;
// // //     }
    
// // //     container.appendChild(element);
// // //   });
// // // };

// // // // Perform word-level diff between two HTML contents
// // // const performWordLevelDiff = (leftHtml, rightHtml) => {
// // //   const leftText = extractPlainText(leftHtml);
// // //   const rightText = extractPlainText(rightHtml);
  
// // //   const dmp = new diff_match_patch();
// // //   const diffs = dmp.diff_main(leftText, rightText);
// // //   dmp.diff_cleanupSemantic(diffs);
  
// // //   const leftHighlighted = applyDiffHighlighting(diffs, 'left');
// // //   const rightHighlighted = applyDiffHighlighting(diffs, 'right');
  
// // //   return { leftHighlighted, rightHighlighted };
// // // };

// // // // Apply diff highlighting for mutual comparison
// // // const applyDiffHighlighting = (diffs, side) => {
// // //   let html = '';
  
// // //   diffs.forEach(diff => {
// // //     const [operation, text] = diff;
    
// // //     if (operation === 0) {
// // //       // Unchanged text
// // //       html += escapeHtml(text);
// // //     } else if (operation === 1) {
// // //       // Added text
// // //       if (side === 'right') {
// // //         html += `<span class="git-inline-added">${escapeHtml(text)}</span>`;
// // //       } else {
// // //         html += `<span class="git-inline-placeholder" style="color: #22c55e; font-style: italic; opacity: 0.7; background: #f0fdf4; padding: 1px 3px; border-radius: 2px;">[+${escapeHtml(text)}]</span>`;
// // //       }
// // //     } else if (operation === -1) {
// // //       // Removed text
// // //       if (side === 'left') {
// // //         html += `<span class="git-inline-removed">${escapeHtml(text)}</span>`;
// // //       } else {
// // //         html += `<span class="git-inline-placeholder" style="color: #ef4444; font-style: italic; opacity: 0.7; background: #fef2f2; padding: 1px 3px; border-radius: 2px;">[-${escapeHtml(text)}]</span>`;
// // //       }
// // //     }
// // //   });
  
// // //   return html;
// // // };

// // // // Text similarity and equality functions
// // // const getTextSimilarity = (text1, text2) => {
// // //   if (!text1 && !text2) return 1;
// // //   if (!text1 || !text2) return 0;
  
// // //   const dmp = new diff_match_patch();
// // //   const diffs = dmp.diff_main(text1, text2);
  
// // //   let totalLength = Math.max(text1.length, text2.length);
// // //   let unchangedLength = 0;
  
// // //   diffs.forEach(diff => {
// // //     if (diff[0] === 0) {
// // //       unchangedLength += diff[1].length;
// // //     }
// // //   });
  
// // //   return totalLength > 0 ? unchangedLength / totalLength : 0;
// // // };

// // // const areTextsEqual = (text1, text2) => {
// // //   const normalize = (text) => text.trim().replace(/\s+/g, ' ').toLowerCase();
// // //   return normalize(text1) === normalize(text2);
// // // };

// // const htmlToDiv = (html) => {
// //   if (!html) return document.createElement("div");
  
// //   const d = document.createElement("div");
// //   try {
// //     d.innerHTML = html;
// //   } catch (error) {
// //     console.warn('Error parsing HTML:', error);
// //   }
// //   return d;
// // };

// // const extractPlainText = (html) => {
// //   if (!html) return "";
  
// //   const tempDiv = document.createElement("div");
// //   try {
// //     tempDiv.innerHTML = html;
// //   } catch (error) {
// //     console.warn('Error extracting plain text:', error);
// //     return "";
// //   }
// //   return tempDiv.textContent || "";
// // };

// // export const renderHtmlDifferences = (diffs) => {
// //   return diffs.map((d) => d.content).join("");
// // };

// // // export const highlightDifferences = (diffs) => {
// // //   return diffs
// // //     .map((diff) => {
// // //       switch (diff.type) {
// // //         case "insert":
// // //           return `<span class=\"diff-insert\">${escapeHtml(
// // //             diff.content
// // //           )}</span>`;
// // //         case "delete":
// // //           return `<span class=\"diff-delete\">${escapeHtml(
// // //             diff.content
// // //           )}</span>`;
// // //         default:
// // //           return escapeHtml(diff.content);
// // //       }
// // //     })
// // //     .join("");
// // // };

// // const escapeHtml = (text) => {
// //   const div = document.createElement("div");
// //   div.textContent = text;
// //   return div.innerHTML;
// // };

// // // // Simplified detailed report generation
// // // export const generateSimpleDetailedReport = (leftLines, rightLines) => {
// // //   try {
// // //     const lines = [];
// // //     const maxLines = Math.max(leftLines.length, rightLines.length);
    
// // //     for (let i = 0; i < maxLines; i++) {
// // //       const leftLine = leftLines[i];
// // //       const rightLine = rightLines[i];
      
// // //       if (leftLine && rightLine) {
// // //         if (areTextsEqual(leftLine.text, rightLine.text)) {
// // //           lines.push({
// // //             v1: String(i + 1),
// // //             v2: String(i + 1),
// // //             status: "UNCHANGED",
// // //             diffHtml: escapeHtml(leftLine.text),
// // //             formatChanges: []
// // //           });
// // //         } else {
// // //           const diffHtml = createInlineDiff(leftLine.text, rightLine.text);
// // //           lines.push({
// // //             v1: String(i + 1),
// // //             v2: String(i + 1),
// // //             status: "MODIFIED",
// // //             diffHtml,
// // //             formatChanges: ["Content modified"]
// // //           });
// // //         }
// // //       } else if (leftLine && !rightLine) {
// // //         lines.push({
// // //           v1: String(i + 1),
// // //           v2: "",
// // //           status: "REMOVED",
// // //           diffHtml: `<span class="git-inline-removed">${escapeHtml(leftLine.text)}</span>`,
// // //           formatChanges: ["Line removed"]
// // //         });
// // //       } else if (!leftLine && rightLine) {
// // //         lines.push({
// // //           v1: "",
// // //           v2: String(i + 1),
// // //           status: "ADDED",
// // //           diffHtml: `<span class="git-inline-added">${escapeHtml(rightLine.text)}</span>`,
// // //           formatChanges: ["Line added"]
// // //         });
// // //       }
// // //     }

// // //     return { lines, tables: [], images: [] };
// // //   } catch (error) {
// // //     console.error('Error generating detailed report:', error);
// // //     return { lines: [], tables: [], images: [] };
// // //   }
// // // };

// // // // Create inline diff for detailed report
// // // const createInlineDiff = (leftText, rightText) => {
// // //   const dmp = new diff_match_patch();
// // //   const diffs = dmp.diff_main(leftText || "", rightText || "");
// // //   dmp.diff_cleanupSemantic(diffs);
  
// // //   return diffs.map(diff => {
// // //     const [operation, text] = diff;
// // //     const escaped = escapeHtml(text);
    
// // //     if (operation === 1) return `<span class="git-inline-added">${escaped}</span>`;
// // //     if (operation === -1) return `<span class="git-inline-removed">${escaped}</span>`;
// // //     return escaped;
// // //   }).join("");
// // // };

// // // // Mutual block-level comparison - both documents show all changes
// // // const applyMutualBlockComparison = (leftHtml, rightHtml) => {
// // //   const leftDiv = htmlToDiv(leftHtml);
// // //   const rightDiv = htmlToDiv(rightHtml);

// // //   const leftBlocks = extractBlocks(leftDiv);
// // //   const rightBlocks = extractBlocks(rightDiv);

// // //   // Create alignment between blocks
// // //   const alignment = alignBlocks(leftBlocks, rightBlocks);
  
// // //   let additions = 0, deletions = 0;

// // //   // Apply highlighting based on alignment
// // //   alignment.forEach(({ left, right, type }) => {
// // //     if (type === 'added') {
// // //       // Block exists only in right document
// // //       if (right) {
// // //         right.element.classList.add('git-line-added');
// // //         additions++;
        
// // //         // Create placeholder in left document
// // //         const placeholder = createPlaceholderBlock(right.element, 'removed');
// // //         // insertPlaceholderInLeft(leftDiv, placeholder, right.index);
// // //       }
// // //     } else if (type === 'removed') {
// // //       // Block exists only in left document
// // //       if (left) {
// // //         left.element.classList.add('git-line-removed');
// // //         deletions++;
        
// // //         // Create placeholder in right document
// // //         const placeholder = createPlaceholderBlock(left.element, 'added');
// // //         // insertPlaceholderInRight(rightDiv, placeholder, left.index);
// // //       }
// // //     } else if (type === 'modified') {
// // //       // Block exists in both but content differs
// // //       if (left && right) {
// // //         left.element.classList.add('git-line-modified');
// // //         right.element.classList.add('git-line-modified');
// // //         additions++;
// // //         deletions++;
// // //       }
// // //     }
// // //     // 'equal' blocks remain unchanged
// // //   });

// // //   return {
// // //     leftWithBlocks: leftDiv.innerHTML,
// // //     rightWithBlocks: rightDiv.innerHTML,
// // //     blockSummary: { additions, deletions }
// // //   };
// // // };

// // // // Mutual table comparison
// // // const applyMutualTableComparison = (leftHtml, rightHtml) => {
// // //   const leftDiv = htmlToDiv(leftHtml);
// // //   const rightDiv = htmlToDiv(rightHtml);

// // //   const leftTables = Array.from(leftDiv.querySelectorAll("table"));
// // //   const rightTables = Array.from(rightDiv.querySelectorAll("table"));

// // //   let additions = 0, deletions = 0;

// // //   const maxTables = Math.max(leftTables.length, rightTables.length);
  
// // //   for (let t = 0; t < maxTables; t++) {
// // //     const leftTable = leftTables[t];
// // //     const rightTable = rightTables[t];
    
// // //     if (leftTable && !rightTable) {
// // //       // Table removed
// // //       leftTable.classList.add("structural-removed");
// // //       deletions++;
      
// // //       const placeholder = createTablePlaceholder(leftTable, 'added');
// // //       insertTablePlaceholder(rightDiv, placeholder, t);
// // //     } else if (!leftTable && rightTable) {
// // //       // Table added
// // //       rightTable.classList.add("structural-added");
// // //       additions++;
      
// // //       const placeholder = createTablePlaceholder(rightTable, 'removed');
// // //       insertTablePlaceholder(leftDiv, placeholder, t);
// // //     } else if (leftTable && rightTable) {
// // //       // Compare table contents
// // //       const { tableAdditions, tableDeletions } = compareTableContents(leftTable, rightTable);
// // //       additions += tableAdditions;
// // //       deletions += tableDeletions;
// // //     }
// // //   }

// // //   return {
// // //     leftWithTables: leftDiv.innerHTML,
// // //     rightWithTables: rightDiv.innerHTML,
// // //     tableSummary: { additions, deletions }
// // //   };
// // // };

// // // // Mutual word-level comparison using diff-match-patch
// // // const applyMutualWordLevelComparison = (leftHtml, rightHtml) => {
// // //   const leftDiv = htmlToDiv(leftHtml);
// // //   const rightDiv = htmlToDiv(rightHtml);

// // //   // Get all text blocks that aren't already highlighted
// // //   const leftBlocks = getTextBlocksForWordComparison(leftDiv);
// // //   const rightBlocks = getTextBlocksForWordComparison(rightDiv);

// // //   let additions = 0, deletions = 0;

// // //   // Align blocks for word-level comparison
// // //   const blockAlignment = alignTextBlocks(leftBlocks, rightBlocks);

// // //   blockAlignment.forEach(({ left, right, type }) => {
// // //     if (type === 'modified' && left && right) {
// // //       const leftText = left.text;
// // //       const rightText = right.text;
      
// // //       // Use diff-match-patch for precise word-level comparison
// // //       const dmp = new diff_match_patch();
// // //       const diffs = dmp.diff_main(leftText, rightText);
// // //       dmp.diff_cleanupSemantic(diffs);
      
// // //       // Apply highlighting to both elements
// // //       const leftHighlighted = applyDiffHighlighting(diffs, 'left');
// // //       const rightHighlighted = applyDiffHighlighting(diffs, 'right');
      
// // //       left.element.innerHTML = leftHighlighted;
// // //       right.element.innerHTML = rightHighlighted;
      
// // //       // Count changes
// // //       diffs.forEach(diff => {
// // //         if (diff[0] === 1) additions++; // Added
// // //         if (diff[0] === -1) deletions++; // Removed
// // //       });
// // //     }
// // //   });

// // //   return {
// // //     leftFinal: leftDiv.innerHTML,
// // //     rightFinal: rightDiv.innerHTML,
// // //     textSummary: { additions, deletions }
// // //   };
// // // };

// // // export const generateDetailedReport = (leftHtml, rightHtml) => {
// // //   const L = htmlToDiv(leftHtml);
// // //   const R = htmlToDiv(rightHtml);

// // //   const leftLines = collectBlockLinesWithFormat(L);
// // //   const rightLines = collectBlockLinesWithFormat(R);

// // //   const leftTexts = leftLines.map((l) => l.text || "");
// // //   const rightTexts = rightLines.map((l) => l.text || "");
// // //   const parts = diffArrays(leftTexts, rightTexts, {
// // //     comparator: (a, b) => areWordsEquivalent(a, b),
// // //   });

// // //   const lines = [];
// // //   let iL = 0,
// // //     iR = 0,
// // //     v1 = 1,
// // //     v2 = 1;

// // //   for (const part of parts) {
// // //     const count = part.count || (part.value ? part.value.length : 0);
// // //     if (part.added) {
// // //       for (let k = 0; k < count; k++) {
// // //         const r = rightLines[iR++];
// // //         if (r && r.text.trim()) {
// // //           lines.push({
// // //             v1: "",
// // //             v2: String(v2++),
// // //             status: "ADDED",
// // //             diffHtml: inlineDiffHtml("", r.text),
// // //             formatChanges: [`added line`],
// // //           });
// // //         }
// // //       }
// // //       continue;
// // //     }
// // //     if (part.removed) {
// // //       for (let k = 0; k < count; k++) {
// // //         const l = leftLines[iL++];
// // //         if (l && l.text.trim()) {
// // //           lines.push({
// // //             v1: String(v1++),
// // //             v2: "",
// // //             status: "REMOVED",
// // //             diffHtml: inlineDiffHtml(l.text, ""),
// // //             formatChanges: [`removed line`],
// // //           });
// // //         }
// // //       }
// // //       continue;
// // //     }
// // //     // unchanged block - may still be formatting-only differences when synced positions differ in formatting
// // //     for (let k = 0; k < count; k++) {
// // //       const l = leftLines[iL++];
// // //       const r = rightLines[iR++];
// // //       if (!l || !r) continue;

// // //       const textEqual = areWordsEquivalent(l.text || "", r.text || "");
// // //       const fmtChanges = compareFormat(l.fmt, r.fmt);

// // //       if (textEqual && fmtChanges.length > 0) {
// // //         lines.push({
// // //           v1: String(v1++),
// // //           v2: String(v2++),
// // //           status: "FORMATTING-ONLY",
// // //           diffHtml: visibleSpaces(escapeHtml(l.text || "")),
// // //           formatChanges: fmtChanges,
// // //         });
// // //       } else if (textEqual) {
// // //         lines.push({
// // //           v1: String(v1++),
// // //           v2: String(v2++),
// // //           status: "UNCHANGED",
// // //           diffHtml: visibleSpaces(escapeHtml(l.text || "")),
// // //           formatChanges: [],
// // //         });
// // //       } else if (l.text.trim() || r.text.trim()) {
// // //         lines.push({
// // //           v1: String(v1++),
// // //           v2: String(v2++),
// // //           status: "MODIFIED",
// // //           diffHtml: inlineDiffHtml(l.text, r.text),
// // //           formatChanges: fmtChanges,
// // //         });
// // //       }
// // //     }
// // //   }

// // //   // Tables report
// // //   const tableReport = [];
// // //   const Lt = Array.from(L.querySelectorAll("table"));
// // //   const Rt = Array.from(R.querySelectorAll("table"));
// // //   const tcount = Math.max(Lt.length, Rt.length);
// // //   for (let ti = 0; ti < tcount; ti++) {
// // //     const TL = Lt[ti],
// // //       TR = Rt[ti];
// // //     if (!TL && TR) {
// // //       tableReport.push({ table: ti + 1, status: "ADDED" });
// // //       continue;
// // //     }
// // //     if (TL && !TR) {
// // //       tableReport.push({ table: ti + 1, status: "REMOVED" });
// // //       continue;
// // //     }
// // //     if (!(TL && TR)) continue;
// // //     const rL = Array.from(TL.rows || []);
// // //     const rR = Array.from(TR.rows || []);
// // //     const rcount = Math.max(rL.length, rR.length);
// // //     for (let ri = 0; ri < rcount; ri++) {
// // //       const rowL = rL[ri],
// // //         rowR = rR[ri];
// // //       if (!rowL && rowR) {
// // //         tableReport.push({ table: ti + 1, row: ri + 1, status: "ADDED" });
// // //         continue;
// // //       }
// // //       if (rowL && !rowR) {
// // //         tableReport.push({ table: ti + 1, row: ri + 1, status: "REMOVED" });
// // //         continue;
// // //       }
// // //       const cL = Array.from(rowL.cells || []);
// // //       const cR = Array.from(rowR.cells || []);
// // //       const ccount = Math.max(cL.length, cR.length);
// // //       for (let ci = 0; ci < ccount; ci++) {
// // //         const cellL = cL[ci],
// // //           cellR = cR[ci];
// // //         if (!cellL && cellR) {
// // //           tableReport.push({
// // //             table: ti + 1,
// // //             row: ri + 1,
// // //             col: ci + 1,
// // //             status: "ADDED",
// // //           });
// // //           continue;
// // //         }
// // //         if (cellL && !cellR) {
// // //           tableReport.push({
// // //             table: ti + 1,
// // //             row: ri + 1,
// // //             col: ci + 1,
// // //             status: "REMOVED",
// // //           });
// // //           continue;
// // //         }
// // //         const a = (cellL.textContent || "").trim();
// // //         const b = (cellR.textContent || "").trim();
// // //         if (a && b && !areWordsEquivalent(a, b)) {
// // //           tableReport.push({
// // //             table: ti + 1,
// // //             row: ri + 1,
// // //             col: ci + 1,
// // //             status: "MODIFIED",
// // //             diffHtml: inlineDiffHtml(a, b),
// // //           });
// // //         }
// // //       }
// // //     }
// // //   }

// // //   // Images report
// // //   const Li = Array.from(L.querySelectorAll("img")).map(
// // //     (i) => i.getAttribute("src") || ""
// // //   );
// // //   const Ri = Array.from(R.querySelectorAll("img")).map(
// // //     (i) => i.getAttribute("src") || ""
// // //   );
// // //   const imgReport = [];
// // //   const imax = Math.max(Li.length, Ri.length);
// // //   for (let i = 0; i < imax; i++) {
// // //     const a = Li[i],
// // //       b = Ri[i];
// // //     if (a && !b) imgReport.push({ index: i + 1, status: "REMOVED", src: a });
// // //     else if (!a && b) imgReport.push({ index: i + 1, status: "ADDED", src: b });
// // //     else if (a && b && a !== b)
// // //       imgReport.push({ index: i + 1, status: "REPLACED", from: a, to: b });
// // //   }

// // //   return { lines, tables: tableReport, images: imgReport };
// // // };

// // // // Extract blocks for comparison
// // // const extractBlocks = (container) => {
// // //   const blocks = [];
// // //   const blockElements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, div, li');
  
// // //   blockElements.forEach((element, index) => {
// // //     // Skip if element is inside a table or already processed
// // //     if (isInsideTable(element) || element.closest('.placeholder-block')) {
// // //       return;
// // //     }
    
// // //     const text = (element.textContent || '').trim();
// // //     const tagName = element.tagName.toLowerCase();
    
// // //     blocks.push({
// // //       element,
// // //       text,
// // //       tagName,
// // //       index,
// // //       id: generateBlockId(element, text, index)
// // //     });
// // //   });
  
// // //   return blocks;
// // // };

// // // const isInsideTable = (node) => {
// // //   let p = node.parentNode;
// // //   while (p) {
// // //     if (p.nodeType === 1) {
// // //       const tag = p.tagName && p.tagName.toLowerCase();
// // //       if (
// // //         tag === "table" ||
// // //         tag === "thead" ||
// // //         tag === "tbody" ||
// // //         tag === "tr" ||
// // //         tag === "td" ||
// // //         tag === "th"
// // //       ) {
// // //         return true;
// // //       }
// // //     }
// // //     p = p.parentNode;
// // //   }
// // //   return false;
// // // };
// // // // Generate unique ID for block matching
// // // const generateBlockId = (element, text, index) => {
// // //   const tagName = element.tagName.toLowerCase();
// // //   const textHash = text.substring(0, 50); // First 50 chars for matching
// // //   return `${tagName}-${textHash}-${index}`;
// // // };
// // // // Align blocks between documents for comparison
// // // const alignBlocks = (leftBlocks, rightBlocks) => {
// // //   const alignment = [];
// // //   const leftUsed = new Set();
// // //   const rightUsed = new Set();

// // //   // First pass: exact matches
// // //   leftBlocks.forEach((leftBlock, leftIndex) => {
// // //     const rightIndex = rightBlocks.findIndex((rightBlock, idx) => 
// // //       !rightUsed.has(idx) && 
// // //       leftBlock.tagName === rightBlock.tagName &&
// // //       areTextsEqual(leftBlock.text, rightBlock.text)
// // //     );
    
// // //     if (rightIndex !== -1) {
// // //       alignment.push({
// // //         left: leftBlock,
// // //         right: rightBlocks[rightIndex],
// // //         type: 'equal'
// // //       });
// // //       leftUsed.add(leftIndex);
// // //       rightUsed.add(rightIndex);
// // //     }
// // //   });

// // //   // Second pass: similar content matches
// // //   leftBlocks.forEach((leftBlock, leftIndex) => {
// // //     if (leftUsed.has(leftIndex)) return;
    
// // //     const rightIndex = rightBlocks.findIndex((rightBlock, idx) => 
// // //       !rightUsed.has(idx) && 
// // //       leftBlock.tagName === rightBlock.tagName &&
// // //       getTextSimilarity(leftBlock.text, rightBlock.text) > 0.6
// // //     );
    
// // //     if (rightIndex !== -1) {
// // //       alignment.push({
// // //         left: leftBlock,
// // //         right: rightBlocks[rightIndex],
// // //         type: 'modified'
// // //       });
// // //       leftUsed.add(leftIndex);
// // //       rightUsed.add(rightIndex);
// // //     }
// // //   });

// // //   // Third pass: unmatched blocks
// // //   leftBlocks.forEach((leftBlock, leftIndex) => {
// // //     if (!leftUsed.has(leftIndex)) {
// // //       alignment.push({
// // //         left: leftBlock,
// // //         right: null,
// // //         type: 'removed'
// // //       });
// // //     }
// // //   });

// // //   rightBlocks.forEach((rightBlock, rightIndex) => {
// // //     if (!rightUsed.has(rightIndex)) {
// // //       alignment.push({
// // //         left: null,
// // //         right: rightBlock,
// // //         type: 'added'
// // //       });
// // //     }
// // //   });

// // //   return alignment.sort((a, b) => {
// // //     const aIndex = a.left?.index ?? a.right?.index ?? 0;
// // //     const bIndex = b.left?.index ?? b.right?.index ?? 0;
// // //     return aIndex - bIndex;
// // //   });
// // // };

// // // // Compare table contents cell by cell
// // // const compareTableContents = (leftTable, rightTable) => {
// // //   const leftRows = Array.from(leftTable.rows || []);
// // //   const rightRows = Array.from(rightTable.rows || []);
  
// // //   let additions = 0, deletions = 0;
  
// // //   const maxRows = Math.max(leftRows.length, rightRows.length);
  
// // //   for (let r = 0; r < maxRows; r++) {
// // //     const leftRow = leftRows[r];
// // //     const rightRow = rightRows[r];
    
// // //     if (leftRow && !rightRow) {
// // //       leftRow.classList.add("git-row-removed");
// // //       deletions++;
// // //     } else if (!leftRow && rightRow) {
// // //       rightRow.classList.add("git-row-added");
// // //       additions++;
// // //     } else if (leftRow && rightRow) {
// // //       const leftCells = Array.from(leftRow.cells || []);
// // //       const rightCells = Array.from(rightRow.cells || []);
// // //       const maxCells = Math.max(leftCells.length, rightCells.length);
      
// // //       for (let c = 0; c < maxCells; c++) {
// // //         const leftCell = leftCells[c];
// // //         const rightCell = rightCells[c];
        
// // //         if (leftCell && !rightCell) {
// // //           leftCell.classList.add("git-cell-removed");
// // //           deletions++;
// // //         } else if (!leftCell && rightCell) {
// // //           rightCell.classList.add("git-cell-added");
// // //           additions++;
// // //         } else if (leftCell && rightCell) {
// // //           const leftText = (leftCell.textContent || '').trim();
// // //           const rightText = (rightCell.textContent || '').trim();
          
// // //           if (!areTextsEqual(leftText, rightText)) {
// // //             leftCell.classList.add("git-cell-modified");
// // //             rightCell.classList.add("git-cell-modified");
            
// // //             // Apply word-level highlighting within cells
// // //             applyWordLevelCellDiff(leftCell, leftText, rightText, "left");
// // //             applyWordLevelCellDiff(rightCell, leftText, rightText, "right");
            
// // //             additions++;
// // //             deletions++;
// // //           }
// // //         }
// // //       }
// // //     }
// // //   }
  
// // //   return { tableAdditions: additions, tableDeletions: deletions };
// // // };

// // // // Apply word-level highlighting to table cells
// // // const applyWordLevelCellDiff = (cell, leftText, rightText, side) => {
// // //   const dmp = new diff_match_patch();
// // //   const diffs = dmp.diff_main(leftText || "", rightText || "");
// // //   dmp.diff_cleanupSemantic(diffs);
  
// // //   const highlighted = applyDiffHighlighting(diffs, side);
// // //   cell.innerHTML = highlighted;
// // // };
// // // // Create table placeholder
// // // const createTablePlaceholder = (originalTable, type) => {
// // //   const placeholder = document.createElement('div');
// // //   placeholder.className = `table-placeholder ${type === 'added' ? 'placeholder-added' : 'placeholder-removed'}`;
  
// // //   // Copy table dimensions
// // //   const rect = originalTable.getBoundingClientRect();
// // //   placeholder.style.width = originalTable.style.width || '100%';
// // //   placeholder.style.height = originalTable.style.height || `${rect.height}px` || '100px';
// // //   placeholder.style.border = '2px dashed ' + (type === 'added' ? '#22c55e' : '#ef4444');
// // //   placeholder.style.backgroundColor = type === 'added' ? '#f0fdf4' : '#fef2f2';
// // //   placeholder.style.borderRadius = '4px';
// // //   placeholder.style.display = 'flex';
// // //   placeholder.style.alignItems = 'center';
// // //   placeholder.style.justifyContent = 'center';
// // //   placeholder.style.margin = originalTable.style.margin || '16px 0';
// // //   placeholder.style.opacity = '0.8';
  
// // //   // Add indicator
// // //   const indicator = document.createElement('span');
// // //   indicator.style.color = type === 'added' ? '#166534' : '#991b1b';
// // //   indicator.style.fontSize = '14px';
// // //   indicator.style.fontWeight = 'bold';
// // //   indicator.textContent = type === 'added' ? '[Table Added]' : '[Table Removed]';
// // //   placeholder.appendChild(indicator);
  
// // //   return placeholder;
// // // };
// // // // Insert table placeholder
// // // const insertTablePlaceholder = (container, placeholder, targetIndex) => {
// // //   const tables = container.querySelectorAll('table');
// // //   if (targetIndex < tables.length) {
// // //     tables[targetIndex].parentNode.insertBefore(placeholder, tables[targetIndex]);
// // //   } else {
// // //     const lastTable = tables[tables.length - 1];
// // //     if (lastTable) {
// // //       lastTable.parentNode.insertBefore(placeholder, lastTable.nextSibling);
// // //     } else {
// // //       container.appendChild(placeholder);
// // //     }
// // //   }
// // // };
// // // // Get text blocks suitable for word-level comparison
// // // const getTextBlocksForWordComparison = (container) => {
// // //   const blocks = [];
// // //   const elements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
  
// // //   elements.forEach(element => {
// // //     // Skip if already highlighted or inside table
// // //     if (element.classList.contains('git-line-added') ||
// // //         element.classList.contains('git-line-removed') ||
// // //         element.classList.contains('git-line-modified') ||
// // //         element.classList.contains('placeholder-block') ||
// // //         isInsideTable(element)) {
// // //       return;
// // //     }
    
// // //     const text = (element.textContent || '').trim();
// // //     if (text) {
// // //       blocks.push({
// // //         element,
// // //         text,
// // //         tagName: element.tagName.toLowerCase()
// // //       });
// // //     }
// // //   });
  
// // //   return blocks;
// // // };
// // // // Align text blocks for word-level comparison
// // // const alignTextBlocks = (leftBlocks, rightBlocks) => {
// // //   const alignment = [];
// // //   const leftUsed = new Set();
// // //   const rightUsed = new Set();

// // //   // Match blocks by content similarity
// // //   leftBlocks.forEach((leftBlock, leftIndex) => {
// // //     let bestMatch = null;
// // //     let bestSimilarity = 0;
    
// // //     rightBlocks.forEach((rightBlock, rightIndex) => {
// // //       if (rightUsed.has(rightIndex)) return;
      
// // //       if (leftBlock.tagName === rightBlock.tagName) {
// // //         const similarity = getTextSimilarity(leftBlock.text, rightBlock.text);
// // //         if (similarity > bestSimilarity && similarity > 0.3) {
// // //           bestMatch = { block: rightBlock, index: rightIndex, similarity };
// // //           bestSimilarity = similarity;
// // //         }
// // //       }
// // //     });
    
// // //     if (bestMatch) {
// // //       const type = bestMatch.similarity === 1 ? 'equal' : 'modified';
// // //       alignment.push({
// // //         left: leftBlock,
// // //         right: bestMatch.block,
// // //         type
// // //       });
// // //       leftUsed.add(leftIndex);
// // //       rightUsed.add(bestMatch.index);
// // //     }
// // //   });

// // //   return alignment;
// // // };
// // // const BLOCK_TAGS = new Set([
// // //   "p",
// // //   "h1",
// // //   "h2",
// // //   "h3",
// // //   "h4",
// // //   "h5",
// // //   "h6",
// // //   "li",
// // //   "pre",
// // //   "div",
// // // ]);
// // // // ===== Detailed line-by-line report =====
// // // const BLOCK_SELECTOR = Array.from(BLOCK_TAGS).join(",");
// // // const extractLineFeatures = (element) => {
// // //   // Gather formatting flags inside the block
// // //   const hasBold = !!element.querySelector("b,strong");
// // //   const hasItalic = !!element.querySelector("i,em");
// // //   const hasUnderline = !!element.querySelector("u");
// // //   const inlineFont =
// // //     element.style && element.style.fontSize ? element.style.fontSize : "";
// // //   let fontSize = inlineFont || "";
// // //   let textAlign =
// // //     element.style && element.style.textAlign ? element.style.textAlign : "";
// // //   // fallback to attribute or class hints
// // //   if (!textAlign) {
// // //     const alignAttr = element.getAttribute && element.getAttribute("align");
// // //     if (alignAttr) textAlign = alignAttr;
// // //   }
// // //   return { hasBold, hasItalic, hasUnderline, fontSize, textAlign };
// // // };
// // // // Word-level equivalence check
// // // const areWordsEquivalent = (word1, word2) => {
// // //   // Normalize punctuation and case for comparison
// // //   const normalize = (word) => {
// // //     return word
// // //       .replace(/[""'']/g, '"')
// // //       .replace(/[–—]/g, '-')
// // //       .trim()
// // //       .toLowerCase();
// // //   };
  
// // //   return normalize(word1) === normalize(word2);
// // // };
// // // const compareFormat = (fa, fb) => {
// // //   const changes = [];
// // //   if (!!fa.hasBold !== !!fb.hasBold)
// // //     changes.push(
// // //       `bold: ${fa.hasBold ? "on" : "off"} → ${fb.hasBold ? "on" : "off"}`
// // //     );
// // //   if (!!fa.hasItalic !== !!fb.hasItalic)
// // //     changes.push(
// // //       `italic: ${fa.hasItalic ? "on" : "off"} → ${fb.hasItalic ? "on" : "off"}`
// // //     );
// // //   if (!!fa.hasUnderline !== !!fb.hasUnderline)
// // //     changes.push(
// // //       `underline: ${fa.hasUnderline ? "on" : "off"} → ${
// // //         fb.hasUnderline ? "on" : "off"
// // //       }`
// // //     );
// // //   if ((fa.fontSize || "") !== (fb.fontSize || ""))
// // //     changes.push(
// // //       `font-size: ${fa.fontSize || "auto"} → ${fb.fontSize || "auto"}`
// // //     );
// // //   if ((fa.textAlign || "") !== (fb.textAlign || ""))
// // //     changes.push(
// // //       `alignment: ${fa.textAlign || "auto"} → ${fb.textAlign || "auto"}`
// // //     );
// // //   return changes;
// // // };
// // // const visibleSpaces = (s) => {
// // //   if (!s) return "";
// // //   return s
// // //     .replace(/ /g, '<span class="ws">·</span>')
// // //     .replace(/\t/g, '<span class="ws">→</span>');
// // // };
// // // const inlineDiffHtml = (a, b) => {
// // //   const dmp = new diff_match_patch();
// // //   const diffs = dmp.diff_main(a || "", b || "");
// // //   dmp.diff_cleanupSemantic(diffs);
  
// // //   return diffs.map(diff => {
// // //     const [operation, text] = diff;
// // //     const val = visibleSpaces(escapeHtml(text));
    
// // //     if (operation === 1) return `<span class="git-inline-added">${val}</span>`;
// // //     if (operation === -1) return `<span class="git-inline-removed">${val}</span>`;
// // //     return val;
// // //   }).join("");
// // // };
// // // // Create placeholder block with same dimensions
// // // const createPlaceholderBlock = (originalElement, type) => {
// // //   const placeholder = document.createElement(originalElement.tagName);
// // //   placeholder.className = `placeholder-block git-line-placeholder ${type === 'added' ? 'placeholder-added' : 'placeholder-removed'}`;
  
// // //   // Copy dimensions and styling
// // //   const computedStyle = window.getComputedStyle(originalElement);
// // //   placeholder.style.height = computedStyle.height;
// // //   placeholder.style.minHeight = computedStyle.minHeight || '20px';
// // //   placeholder.style.width = computedStyle.width;
// // //   placeholder.style.margin = computedStyle.margin;
// // //   placeholder.style.padding = computedStyle.padding;
// // //   placeholder.style.border = '2px dashed ' + (type === 'added' ? '#22c55e' : '#ef4444');
// // //   placeholder.style.backgroundColor = type === 'added' ? '#f0fdf4' : '#fef2f2';
// // //   placeholder.style.borderRadius = '4px';
// // //   placeholder.style.opacity = '0.7';
  
// // //   // Add indicator text
// // //   const indicator = document.createElement('span');
// // //   indicator.style.color = type === 'added' ? '#166534' : '#991b1b';
// // //   indicator.style.fontSize = '12px';
// // //   indicator.style.fontStyle = 'italic';
// // //   indicator.textContent = type === 'added' ? '[Content added in other document]' : '[Content removed in other document]';
// // //   placeholder.appendChild(indicator);
  
// // //   return placeholder;
// // // };
// // // const collectBlockLinesWithFormat = (root) => {
// // //   const blocks = Array.from(root.querySelectorAll(BLOCK_SELECTOR));
// // //   return blocks
// // //     .filter((b) => !isInsideTable(b))
// // //     .map((el, idx) => {
// // //       const text = el.textContent || "";
// // //       const fmt = extractLineFeatures(el);
// // //       return { index: idx, text, fmt, element: el };
// // //     });
// // // };
// // // Updated compareHtmlDocuments function with Git-style line alignment
// // export const compareHtmlDocuments = (leftHtml, rightHtml) => {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       try {
// //         console.log('Starting Git-style document comparison...');
        
// //         // Quick text comparison first
// //         const leftText = extractPlainText(leftHtml);
// //         const rightText = extractPlainText(rightHtml);

// //         if (leftText.trim() === rightText.trim()) {
// //           console.log('Documents are identical');
// //           resolve({
// //             leftDiffs: [{ type: "equal", content: leftHtml }],
// //             rightDiffs: [{ type: "equal", content: rightHtml }],
// //             summary: { additions: 0, deletions: 0, changes: 0 },
// //             detailed: { lines: [], tables: [], images: [] }
// //           });
// //           return;
// //         }

// //         console.log('Documents differ, performing Git-style alignment...');
        
// //         // Perform Git-style line-by-line comparison with alignment
// //         const result = performGitStyleComparison(leftHtml, rightHtml);
// //         console.log('Git-style comparison completed successfully');
// //         resolve(result);
        
// //       } catch (error) {
// //         console.error("Error during document comparison:", error);
// //         resolve({
// //           leftDiffs: [{ type: "equal", content: leftHtml }],
// //           rightDiffs: [{ type: "equal", content: rightHtml }],
// //           summary: { additions: 0, deletions: 0, changes: 0 },
// //           detailed: { lines: [], tables: [], images: [] },
// //         });
// //       }
// //     }, 10);
// //   });
// // };

// // // Main Git-style comparison function
// // const performGitStyleComparison = (leftHtml, rightHtml) => {
// //   const leftDiv = htmlToDiv(leftHtml);
// //   const rightDiv = htmlToDiv(rightHtml);

// //   // Extract meaningful lines from both documents
// //   const leftLines = extractMeaningfulLines(leftDiv);
// //   const rightLines = extractMeaningfulLines(rightDiv);

// //   console.log(`Comparing ${leftLines.length} vs ${rightLines.length} lines`);

// //   // Create aligned comparison with placeholders
// //   const { leftAligned, rightAligned, summary } = createGitStyleAlignment(leftLines, rightLines);

// //   // Apply the aligned content back to the divs
// //   applyAlignedContentToDiv(leftDiv, leftAligned);
// //   applyAlignedContentToDiv(rightDiv, rightAligned);

// //   const detailed = generateAlignedDetailedReport(leftAligned, rightAligned);

// //   return {
// //     leftDiffs: [{ type: "equal", content: leftDiv.innerHTML }],
// //     rightDiffs: [{ type: "equal", content: rightDiv.innerHTML }],
// //     summary,
// //     detailed
// //   };
// // };

// // // Extract meaningful lines (paragraphs, headings, list items, etc.)
// // // const extractMeaningfulLines = (container) => {
// // //   const lines = [];
// // //   const elements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, div');
  
// // //   elements.forEach((element, index) => {
// // //     // Skip nested elements and table contents
// // //     if (element.closest('table') || element.querySelector('p, h1, h2, h3, h4, h5, h6, li')) {
// // //       return;
// // //     }
    
// // //     const text = (element.textContent || '').trim();
// // //     const html = element.outerHTML;
    
// // //     lines.push({
// // //       element: element.cloneNode(true), // Clone for manipulation
// // //       text,
// // //       html,
// // //       index,
// // //       tagName: element.tagName.toLowerCase(),
// // //       isEmpty: !text,
// // //       originalElement: element
// // //     });
// // //   });
  
// // //   return lines;
// // // };
// // const extractMeaningfulLines = (container) => {
// //   const lines = [];
// //   const elements = container.querySelectorAll(
// //     'p, h1, h2, h3, h4, h5, h6, li, div, table, img'
// //   );

// //   elements.forEach((element, index) => {
// //     const tag = element.tagName.toLowerCase();

// //     if (
// //       (element.closest('table') && tag !== 'table') || // skip nested inside table
// //       element.querySelector('p, h1, h2, h3, h4, h5, h6, li, table, img')
// //     ) {
// //       return;
// //     }

// //     let text = '';
// //     if (tag === 'img') {
// //       text = element.getAttribute('src') || '[IMAGE]';
// //     } else if (tag === 'table') {
// //       // flatten table rows into JSON
// //       text = Array.from(element.querySelectorAll('tr')).map(tr =>
// //         Array.from(tr.querySelectorAll('td, th')).map(td =>
// //           td.textContent.trim()
// //         )
// //       );
// //     } else {
// //       text = (element.textContent || '').trim();
// //     }

// //     lines.push({
// //       element: element.cloneNode(true),
// //       text,
// //       html: element.outerHTML,
// //       index,
// //       tagName: tag,
// //       isEmpty: !text,
// //       originalElement: element,
// //     });
// //   });

// //   return lines;
// // };

// // const diffTables = (leftTable, rightTable) => {
// //   const maxRows = Math.max(leftTable.length, rightTable.length);
// //   const rows = [];

// //   for (let i = 0; i < maxRows; i++) {
// //     const leftRow = leftTable[i] || [];
// //     const rightRow = rightTable[i] || [];
// //     const maxCols = Math.max(leftRow.length, rightRow.length);

// //     const cells = [];
// //     for (let j = 0; j < maxCols; j++) {
// //       const leftCell = leftRow[j] || '';
// //       const rightCell = rightRow[j] || '';

// //       if (leftCell === rightCell) {
// //         cells.push({ status: 'UNCHANGED', text: leftCell });
// //       } else if (!leftCell) {
// //         cells.push({ status: 'ADDED', text: rightCell });
// //       } else if (!rightCell) {
// //         cells.push({ status: 'REMOVED', text: leftCell });
// //       } else {
// //         cells.push({
// //           status: 'MODIFIED',
// //           text: createInlineTextDiff(leftCell, rightCell),
// //         });
// //       }
// //     }

// //     rows.push(cells);
// //   }

// //   return rows;
// // };


// // // Create Git-style alignment with placeholders for missing lines
// // const createGitStyleAlignment = (leftLines, rightLines) => {
// //   const leftAligned = [];
// //   const rightAligned = [];
// //   let additions = 0, deletions = 0;

// //   // Simple line-by-line alignment algorithm
// //   let leftIndex = 0;
// //   let rightIndex = 0;

// //   while (leftIndex < leftLines.length || rightIndex < rightLines.length) {
// //     const leftLine = leftLines[leftIndex];
// //     const rightLine = rightLines[rightIndex];

// //     if (leftIndex >= leftLines.length) {
// //       // Only right lines remaining - additions
// //       rightAligned.push({
// //         ...rightLine,
// //         type: 'added'
// //       });
// //       leftAligned.push(createPlaceholderLine(rightLine, 'removed'));
// //       additions++;
// //       rightIndex++;
      
// //     } else if (rightIndex >= rightLines.length) {
// //       // Only left lines remaining - deletions
// //       leftAligned.push({
// //         ...leftLine,
// //         type: 'unchanged'
// //       });
// //       rightAligned.push(createPlaceholderLine(leftLine, 'removed'));
// //       deletions++;
// //       leftIndex++;
      
// //     } else if (areTextsSimilar(leftLine.text, rightLine.text)) {
// //       // Lines are similar - keep both
// //       leftAligned.push({
// //         ...leftLine,
// //         type: 'unchanged'
// //       });
// //       rightAligned.push({
// //         ...rightLine,
// //         type: 'unchanged'
// //       });
// //       leftIndex++;
// //       rightIndex++;
      
// //     } else {
// //       // Lines are different - check if line appears later in the other document
// //       const rightMatch = findMatchingLineIndex(leftLine, rightLines, rightIndex + 1);
// //       const leftMatch = findMatchingLineIndex(rightLine, leftLines, leftIndex + 1);

// //       if (rightMatch !== -1 && (leftMatch === -1 || rightMatch < leftMatch + rightIndex)) {
// //         // Left line appears later in right - current right is an addition
// //         rightAligned.push({
// //           ...rightLine,
// //           type: 'added'
// //         });
// //         leftAligned.push(createPlaceholderLine(rightLine, 'removed'));
// //         additions++;
// //         rightIndex++;
        
// //       } else if (leftMatch !== -1) {
// //         // Right line appears later in left - current left is a deletion
// //         leftAligned.push({
// //           ...leftLine,
// //           type: 'unchanged'
// //         });
// //         rightAligned.push(createPlaceholderLine(leftLine, 'removed'));
// //         deletions++;
// //         leftIndex++;
        
// //       } else {
// //         // Lines are just different - treat as modification
// //         leftAligned.push({
// //           ...leftLine,
// //           type: 'unchanged'
// //         });
// //         rightAligned.push({
// //           ...rightLine,
// //           type: 'modified'
// //         });
// //         additions++;
// //         deletions++;
// //         leftIndex++;
// //         rightIndex++;
// //       }
// //     }
// //   }

// //   return {
// //     leftAligned,
// //     rightAligned,
// //     summary: { additions, deletions, changes: additions + deletions }
// //   };
// // };

// // // Find matching line in array
// // const findMatchingLineIndex = (targetLine, lines, startIndex = 0) => {
// //   for (let i = startIndex; i < Math.min(lines.length, startIndex + 5); i++) {
// //     if (areTextsSimilar(targetLine.text, lines[i].text)) {
// //       return i - startIndex;
// //     }
// //   }
// //   return -1;
// // };

// // // Check if two texts are similar enough to be considered the same line
// // const areTextsSimilar = (text1, text2) => {
// //   if (!text1 && !text2) return true;
// //   if (!text1 || !text2) return false;
  
// //   // Normalize texts for comparison
// //   const normalize = (text) => text.trim().toLowerCase().replace(/\s+/g, ' ');
// //   const norm1 = normalize(text1);
// //   const norm2 = normalize(text2);
  
// //   if (norm1 === norm2) return true;
  
// //   // Check similarity ratio
// //   const similarity = calculateSimilarity(norm1, norm2);
// //   return similarity > 0.8;
// // };

// // // Calculate text similarity ratio
// // const calculateSimilarity = (text1, text2) => {
// //   const longer = text1.length > text2.length ? text1 : text2;
// //   const shorter = text1.length > text2.length ? text2 : text1;
  
// //   if (longer.length === 0) return 1.0;
  
// //   const editDistance = calculateEditDistance(longer, shorter);
// //   return (longer.length - editDistance) / longer.length;
// // };

// // // Calculate edit distance between two strings
// // const calculateEditDistance = (str1, str2) => {
// //   const matrix = [];
  
// //   for (let i = 0; i <= str2.length; i++) {
// //     matrix[i] = [i];
// //   }
  
// //   for (let j = 0; j <= str1.length; j++) {
// //     matrix[0][j] = j;
// //   }
  
// //   for (let i = 1; i <= str2.length; i++) {
// //     for (let j = 1; j <= str1.length; j++) {
// //       if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
// //         matrix[i][j] = matrix[i - 1][j - 1];
// //       } else {
// //         matrix[i][j] = Math.min(
// //           matrix[i - 1][j - 1] + 1,
// //           matrix[i][j - 1] + 1,
// //           matrix[i - 1][j] + 1
// //         );
// //       }
// //     }
// //   }
  
// //   return matrix[str2.length][str1.length];
// // };

// // // Create placeholder line for missing content
// // const createPlaceholderLine = (originalLine, type) => {
// //   const placeholder = originalLine.element.cloneNode(false);
// //   placeholder.className = `git-line-placeholder ${type}`;
// //   placeholder.style.backgroundColor = '#fee2e2';
// //   placeholder.style.borderLeft = '4px solid #ef4444';
// //   placeholder.style.color = '#991b1b';
// //   placeholder.style.fontStyle = 'italic';
// //   placeholder.style.padding = '8px 12px';
// //   placeholder.style.margin = '4px 0';
// //   placeholder.style.opacity = '0.8';
// //   placeholder.style.borderRadius = '4px';
// //   placeholder.style.minHeight = '20px';
// //   placeholder.style.display = 'block';
  
// //   // Add placeholder text indicating what was removed
// //   const textPreview = originalLine.text.substring(0, 80);
// //   const ellipsis = originalLine.text.length > 80 ? '...' : '';
// //   placeholder.textContent = `[REMOVED: ${textPreview}${ellipsis}]`;
  
// //   return {
// //     element: placeholder,
// //     text: '',
// //     html: placeholder.outerHTML,
// //     isEmpty: true,
// //     type: 'placeholder',
// //     originalText: originalLine.text,
// //     tagName: originalLine.tagName
// //   };
// // };

// // // Apply aligned content back to the document containers
// // const applyAlignedContentToDiv = (container, alignedLines) => {
// //   // Clear existing content
// //   container.innerHTML = '';
  
// //   alignedLines.forEach(line => {
// //     const element = line.element.cloneNode(true);
    
// //     // Apply styling based on line type
// //     switch (line.type) {
// //       case 'added':
// //         element.classList.add('git-line-added');
// //         element.style.backgroundColor = '#dcfce7';
// //         element.style.borderLeft = '4px solid #22c55e';
// //         element.style.padding = '4px 8px';
// //         element.style.margin = '2px 0';
// //         break;
        
// //       case 'modified':
// //         element.classList.add('git-line-modified');
// //         element.style.backgroundColor = '#fef3c7';
// //         element.style.borderLeft = '4px solid #f59e0b';
// //         element.style.padding = '4px 8px';
// //         element.style.margin = '2px 0';
// //         break;
        
// //       case 'placeholder':
// //         // Placeholder styling already applied
// //         break;
        
// //       default:
// //         // Unchanged lines - no special styling
// //         break;
// //     }
    
// //     container.appendChild(element);
// //   });
// // };

// // // Generate detailed report for aligned comparison
// // // const generateAlignedDetailedReport = (leftAligned, rightAligned) => {
// // //   const lines = [];
// // //   const maxLines = Math.max(leftAligned.length, rightAligned.length);
  
// // //   for (let i = 0; i < maxLines; i++) {
// // //     const leftLine = leftAligned[i];
// // //     const rightLine = rightAligned[i];
    
// // //     if (leftLine && rightLine) {
// // //       if (leftLine.type === 'placeholder' && rightLine.type === 'added') {
// // //         lines.push({
// // //           v1: '',
// // //           v2: String(i + 1),
// // //           status: 'ADDED',
// // //           diffHtml: `<span class="git-inline-added">${escapeHtml(rightLine.text)}</span>`,
// // //           formatChanges: ['Line added']
// // //         });
// // //       } else if (leftLine.type === 'unchanged' && rightLine.type === 'placeholder') {
// // //         lines.push({
// // //           v1: String(i + 1),
// // //           v2: '',
// // //           status: 'REMOVED',
// // //           diffHtml: `<span class="git-inline-removed">${escapeHtml(leftLine.text)}</span>`,
// // //           formatChanges: ['Line removed']
// // //         });
// // //       } else if (leftLine.type === 'unchanged' && rightLine.type === 'modified') {
// // //         lines.push({
// // //           v1: String(i + 1),
// // //           v2: String(i + 1),
// // //           status: 'MODIFIED',
// // //           diffHtml: createInlineTextDiff(leftLine.text, rightLine.text),
// // //           formatChanges: ['Content modified']
// // //         });
// // //       } else {
// // //         lines.push({
// // //           v1: String(i + 1),
// // //           v2: String(i + 1),
// // //           status: 'UNCHANGED',
// // //           diffHtml: escapeHtml(leftLine.text),
// // //           formatChanges: []
// // //         });
// // //       }
// // //     }
// // //   }
  
// // //   return { lines, tables: [], images: [] };
// // // };
// // const generateAlignedDetailedReport = (leftAligned, rightAligned) => {
// //   const lines = [];
// //   const tables = [];
// //   const images = [];

// //   const maxLines = Math.max(leftAligned.length, rightAligned.length);

// //   for (let i = 0; i < maxLines; i++) {
// //     const leftLine = leftAligned[i];
// //     const rightLine = rightAligned[i];

// //     if (leftLine && rightLine) {
// //       // 🟢 TABLE diff
// //       if (leftLine.tagName === 'table' || rightLine.tagName === 'table') {
// //         const leftTable = Array.isArray(leftLine?.text) ? leftLine.text : [];
// //         const rightTable = Array.isArray(rightLine?.text) ? rightLine.text : [];
// //         const tableDiff = diffTables(leftTable, rightTable);

// //         tables.push({
// //           v1: leftLine?.html || '',
// //           v2: rightLine?.html || '',
// //           status:
// //             !leftLine ? 'ADDED' : !rightLine ? 'REMOVED' : 'MODIFIED',
// //           rows: tableDiff,
// //         });
// //       }

// //       // 🟢 IMAGE diff
// //       else if (leftLine.tagName === 'img' || rightLine.tagName === 'img') {
// //         images.push({
// //           v1: leftLine?.html || '',
// //           v2: rightLine?.html || '',
// //           src1: leftLine?.text || '',
// //           src2: rightLine?.text || '',
// //           status:
// //             !leftLine ? 'ADDED'
// //               : !rightLine ? 'REMOVED'
// //               : leftLine.text === rightLine.text ? 'UNCHANGED' : 'MODIFIED',
// //         });
// //       }

// //       // 🟢 TEXT diff (existing logic)
// //       else {
// //         if (leftLine.type === 'placeholder' && rightLine.type === 'added') {
// //           lines.push({
// //             v1: '',
// //             v2: String(i + 1),
// //             status: 'ADDED',
// //             diffHtml: `<span class="git-inline-added">${escapeHtml(rightLine.text)}</span>`,
// //             formatChanges: ['Line added'],
// //           });
// //         } else if (leftLine.type === 'unchanged' && rightLine.type === 'placeholder') {
// //           lines.push({
// //             v1: String(i + 1),
// //             v2: '',
// //             status: 'REMOVED',
// //             diffHtml: `<span class="git-inline-removed">${escapeHtml(leftLine.text)}</span>`,
// //             formatChanges: ['Line removed'],
// //           });
// //         } else if (leftLine.type === 'unchanged' && rightLine.type === 'modified') {
// //           lines.push({
// //             v1: String(i + 1),
// //             v2: String(i + 1),
// //             status: 'MODIFIED',
// //             diffHtml: createInlineTextDiff(leftLine.text, rightLine.text),
// //             formatChanges: ['Content modified'],
// //           });
// //         } else {
// //           lines.push({
// //             v1: String(i + 1),
// //             v2: String(i + 1),
// //             status: 'UNCHANGED',
// //             diffHtml: escapeHtml(leftLine.text),
// //             formatChanges: [],
// //           });
// //         }
// //       }
// //     }
// //   }

// //   return { lines, tables, images };
// // };



// // // Create inline text diff for detailed report
// // const createInlineTextDiff = (leftText, rightText) => {
// //   const dmp = new diff_match_patch();
// //   const diffs = dmp.diff_main(leftText || '', rightText || '');
// //   dmp.diff_cleanupSemantic(diffs);
  
// //   return diffs.map(diff => {
// //     const [operation, text] = diff;
// //     const escaped = escapeHtml(text);
    
// //     if (operation === 1) return `<span class="git-inline-added">${escaped}</span>`;
// //     if (operation === -1) return `<span class="git-inline-removed">${escaped}</span>`;
// //     return escaped;
// //   }).join('');
// // };
// import { diffChars, diffWordsWithSpace, diffArrays, diffSentences, Diff } from "diff";
// import { diff_match_patch } from 'diff-match-patch';

// export const compareHtmlDocuments = (leftHtml, rightHtml) => {
//   return new Promise((resolve) => {
//     // Use setTimeout to prevent browser blocking
//     setTimeout(() => {
//       try {
//         console.log('Starting optimized document comparison...');
        
//         // Quick text comparison first
//         const leftText = extractPlainText(leftHtml);
//         const rightText = extractPlainText(rightHtml);

//         if (leftText.trim() === rightText.trim()) {
//           console.log('Documents are identical');
//           resolve({
//             leftDiffs: [{ type: "equal", content: leftHtml }],
//             rightDiffs: [{ type: "equal", content: rightHtml }],
//             summary: { additions: 0, deletions: 0, changes: 0 },
//             detailed: { lines: [], tables: [], images: [] }
//           });
//           return;
//         }

//         console.log('Documents differ, performing mutual comparison...');
        
//         // Perform mutual comparison with proper placeholder insertion
//         const { leftWithBlocks, rightWithBlocks, blockSummary } = 
//           applyMutualBlockComparison(leftHtml, rightHtml);

//         const { leftWithTables, rightWithTables, tableSummary } = 
//           applyMutualTableComparison(leftWithBlocks, rightWithBlocks);

//         const { leftFinal, rightFinal, textSummary } =
//           applyMutualWordLevelComparison(leftWithTables, rightWithTables);

//         const summary = {
//           additions: blockSummary.additions + tableSummary.additions + textSummary.additions,
//           deletions: blockSummary.deletions + tableSummary.deletions + textSummary.deletions,
//           changes: 0
//         };
//         summary.changes = summary.additions + summary.deletions;

//         const detailed = generateDetailedReport(leftFinal, rightFinal);

//         const result = {
//           leftDiffs: [{ type: "modified", content: leftFinal }],
//           rightDiffs: [{ type: "modified", content: rightFinal }],
//           summary,
//           detailed
//         };

//         console.log('Comparison completed successfully');
//         resolve(result);
        
//       } catch (error) {
//         console.error("Error during document comparison:", error);
//         resolve({
//           leftDiffs: [{ type: "equal", content: leftHtml }],
//           rightDiffs: [{ type: "equal", content: rightHtml }],
//           summary: { additions: 0, deletions: 0, changes: 0 },
//           detailed: { lines: [], tables: [], images: [] },
//         });
//       }
//     }, 10);
//   });
// };

// const applyMutualBlockComparison = (leftHtml, rightHtml) => {
//   const leftBlocks = splitIntoBlocks(leftHtml);
//   const rightBlocks = splitIntoBlocks(rightHtml);
  
//   let leftResult = '';
//   let rightResult = '';
//   let additions = 0;
//   let deletions = 0;

//   // Use a diff algorithm to compare blocks
//   const diff = diffArrays(leftBlocks, rightBlocks);
  
//   diff.forEach(part => {
//     if (part.added) {
//       // New blocks added in right document
//       rightResult += part.value.join('');
//       // Add placeholder blocks in left document
//       leftResult += part.value.map(() => '<div class="diff-placeholder" style="height: 1em; background-color: #f0f8ff; border-left: 2px dashed #007acc; margin: 2px 0;"></div>').join('');
//       additions += part.value.length;
//     } else if (part.removed) {
//       // Blocks removed from right document
//       leftResult += part.value.join('');
//       // Add placeholder in right document
//       rightResult += part.value.map(() => '<div class="diff-placeholder" style="height: 1em; background-color: #fff0f0; border-left: 2px dashed #ff6b6b; margin: 2px 0;"></div>').join('');
//       deletions += part.value.length;
//     } else {
//       // Equal blocks
//       leftResult += part.value.join('');
//       rightResult += part.value.join('');
//     }
//   });

//   return {
//     leftWithBlocks: leftResult,
//     rightWithBlocks: rightResult,
//     blockSummary: { additions, deletions }
//   };
// };
// const splitIntoBlocks = (html) => {
//   // Split HTML into logical blocks (paragraphs, divs, tables, etc.)
//   const blockRegex = /(<(?:div|p|h[1-6]|table|ul|ol|li|section|article)[^>]*>.*?<\/(?:div|p|h[1-6]|table|ul|ol|li|section|article)>)|(<br[^>]*>)/gis;
//   const blocks = [];
//   let lastIndex = 0;
//   let match;
  
//   while ((match = blockRegex.exec(html)) !== null) {
//     // Add text before the block
//     if (match.index > lastIndex) {
//       blocks.push(html.substring(lastIndex, match.index));
//     }
//     // Add the block itself
//     blocks.push(match[0]);
//     lastIndex = match.index + match[0].length;
//   }
  
//   // Add remaining text
//   if (lastIndex < html.length) {
//     blocks.push(html.substring(lastIndex));
//   }
  
//   return blocks.filter(block => block.trim().length > 0);
// };

// // Apply diff highlighting for mutual comparison
// const applyDiffHighlighting = (diffs, side) => {
//   let html = '';
  
//   diffs.forEach(diff => {
//     const [operation, text] = diff;
    
//     if (operation === 0) {
//       // Unchanged text
//       html += escapeHtml(text);
//     } else if (operation === 1) {
//       // Added text
//       if (side === 'right') {
//         html += `<span class="git-inline-added">${escapeHtml(text)}</span>`;
//       } else {
//         html += `<span class="git-inline-placeholder" style="color: #22c55e; font-style: italic; opacity: 0.7; background: #f0fdf4; padding: 1px 3px; border-radius: 2px;">[+${escapeHtml(text)}]</span>`;
//       }
//     } else if (operation === -1) {
//       // Removed text
//       if (side === 'left') {
//         html += `<span class="git-inline-removed">${escapeHtml(text)}</span>`;
//       } else {
//         html += `<span class="git-inline-placeholder" style="color: #ef4444; font-style: italic; opacity: 0.7; background: #fef2f2; padding: 1px 3px; border-radius: 2px;">[-${escapeHtml(text)}]</span>`;
//       }
//     }
//   });
  
//   return html;
// };

// // Text similarity and equality functions
// const getTextSimilarity = (text1, text2) => {
//   if (!text1 && !text2) return 1;
//   if (!text1 || !text2) return 0;
  
//   const dmp = new diff_match_patch();
//   const diffs = dmp.diff_main(text1, text2);
  
//   let totalLength = Math.max(text1.length, text2.length);
//   let unchangedLength = 0;
  
//   diffs.forEach(diff => {
//     if (diff[0] === 0) {
//       unchangedLength += diff[1].length;
//     }
//   });
  
//   return totalLength > 0 ? unchangedLength / totalLength : 0;
// };

// const areTextsEqual = (text1, text2) => {
//   const normalize = (text) => text.trim().replace(/\s+/g, ' ').toLowerCase();
//   return normalize(text1) === normalize(text2);
// };

// const htmlToDiv = (html) => {
//   if (!html) return document.createElement("div");
  
//   const d = document.createElement("div");
//   try {
//     d.innerHTML = html;
//   } catch (error) {
//     console.warn('Error parsing HTML:', error);
//   }
//   return d;
// };

// const extractPlainText = (html) => {
//   if (!html) return "";
  
//   const tempDiv = document.createElement("div");
//   try {
//     tempDiv.innerHTML = html;
//   } catch (error) {
//     console.warn('Error extracting plain text:', error);
//     return "";
//   }
//   return tempDiv.textContent || "";
// };

// export const renderHtmlDifferences = (diffs) => {
//   return diffs.map((d) => d.content).join("");
// };

// export const highlightDifferences = (diffs) => {
//   return diffs
//     .map((diff) => {
//       switch (diff.type) {
//         case "insert":
//           return `<span class=\"diff-insert\">${escapeHtml(
//             diff.content
//           )}</span>`;
//         case "delete":
//           return `<span class=\"diff-delete\">${escapeHtml(
//             diff.content
//           )}</span>`;
//         default:
//           return escapeHtml(diff.content);
//       }
//     })
//     .join("");
// };

// const escapeHtml = (text) => {
//   const div = document.createElement("div");
//   div.textContent = text;
//   return div.innerHTML;
// };

// // Simplified detailed report generation
// export const generateSimpleDetailedReport = (leftLines, rightLines) => {
//   try {
//     const lines = [];
//     const maxLines = Math.max(leftLines.length, rightLines.length);
    
//     for (let i = 0; i < maxLines; i++) {
//       const leftLine = leftLines[i];
//       const rightLine = rightLines[i];
      
//       if (leftLine && rightLine) {
//         if (areTextsEqual(leftLine.text, rightLine.text)) {
//           lines.push({
//             v1: String(i + 1),
//             v2: String(i + 1),
//             status: "UNCHANGED",
//             diffHtml: escapeHtml(leftLine.text),
//             formatChanges: []
//           });
//         } else {
//           const diffHtml = createInlineDiff(leftLine.text, rightLine.text);
//           lines.push({
//             v1: String(i + 1),
//             v2: String(i + 1),
//             status: "MODIFIED",
//             diffHtml,
//             formatChanges: ["Content modified"]
//           });
//         }
//       } else if (leftLine && !rightLine) {
//         lines.push({
//           v1: String(i + 1),
//           v2: "",
//           status: "REMOVED",
//           diffHtml: `<span class="git-inline-removed">${escapeHtml(leftLine.text)}</span>`,
//           formatChanges: ["Line removed"]
//         });
//       } else if (!leftLine && rightLine) {
//         lines.push({
//           v1: "",
//           v2: String(i + 1),
//           status: "ADDED",
//           diffHtml: `<span class="git-inline-added">${escapeHtml(rightLine.text)}</span>`,
//           formatChanges: ["Line added"]
//         });
//       }
//     }

//     return { lines, tables: [], images: [] };
//   } catch (error) {
//     console.error('Error generating detailed report:', error);
//     return { lines: [], tables: [], images: [] };
//   }
// };

// // Create inline diff for detailed report
// const createInlineDiff = (leftText, rightText) => {
//   const dmp = new diff_match_patch();
//   const diffs = dmp.diff_main(leftText || "", rightText || "");
//   dmp.diff_cleanupSemantic(diffs);
  
//   return diffs.map(diff => {
//     const [operation, text] = diff;
//     const escaped = escapeHtml(text);
    
//     if (operation === 1) return `<span class="git-inline-added">${escaped}</span>`;
//     if (operation === -1) return `<span class="git-inline-removed">${escaped}</span>`;
//     return escaped;
//   }).join("");
// };

// // Mutual table comparison
// const applyMutualTableComparison = (leftHtml, rightHtml) => {
//   const leftDiv = htmlToDiv(leftHtml);
//   const rightDiv = htmlToDiv(rightHtml);

//   const leftTables = Array.from(leftDiv.querySelectorAll("table"));
//   const rightTables = Array.from(rightDiv.querySelectorAll("table"));

//   let additions = 0, deletions = 0;

//   const maxTables = Math.max(leftTables.length, rightTables.length);
  
//   for (let t = 0; t < maxTables; t++) {
//     const leftTable = leftTables[t];
//     const rightTable = rightTables[t];
    
//     if (leftTable && !rightTable) {
//       // Table removed
//       leftTable.classList.add("structural-removed");
//       deletions++;
      
//       const placeholder = createTablePlaceholder(leftTable, 'added');
//       insertTablePlaceholder(rightDiv, placeholder, t);
//     } else if (!leftTable && rightTable) {
//       // Table added
//       rightTable.classList.add("structural-added");
//       additions++;
      
//       const placeholder = createTablePlaceholder(rightTable, 'removed');
//       insertTablePlaceholder(leftDiv, placeholder, t);
//     } else if (leftTable && rightTable) {
//       // Compare table contents
//       const { tableAdditions, tableDeletions } = compareTableContents(leftTable, rightTable);
//       additions += tableAdditions;
//       deletions += tableDeletions;
//     }
//   }

//   return {
//     leftWithTables: leftDiv.innerHTML,
//     rightWithTables: rightDiv.innerHTML,
//     tableSummary: { additions, deletions }
//   };
// };

// // Mutual word-level comparison using diff-match-patch
// const applyMutualWordLevelComparison = (leftHtml, rightHtml) => {
//   const leftDiv = htmlToDiv(leftHtml);
//   const rightDiv = htmlToDiv(rightHtml);

//   // Get all text blocks that aren't already highlighted
//   const leftBlocks = getTextBlocksForWordComparison(leftDiv);
//   const rightBlocks = getTextBlocksForWordComparison(rightDiv);

//   let additions = 0, deletions = 0;

//   // Align blocks for word-level comparison
//   const blockAlignment = alignTextBlocks(leftBlocks, rightBlocks);

//   blockAlignment.forEach(({ left, right, type }) => {
//     if (type === 'modified' && left && right) {
//       const leftText = left.text;
//       const rightText = right.text;
      
//       // Use diff-match-patch for precise word-level comparison
//       const dmp = new diff_match_patch();
//       const diffs = dmp.diff_main(leftText, rightText);
//       dmp.diff_cleanupSemantic(diffs);
      
//       // Apply highlighting to both elements
//       const leftHighlighted = applyDiffHighlighting(diffs, 'left');
//       const rightHighlighted = applyDiffHighlighting(diffs, 'right');
      
//       left.element.innerHTML = leftHighlighted;
//       right.element.innerHTML = rightHighlighted;
      
//       // Count changes
//       diffs.forEach(diff => {
//         if (diff[0] === 1) additions++; // Added
//         if (diff[0] === -1) deletions++; // Removed
//       });
//     }
//   });

//   return {
//     leftFinal: leftDiv.innerHTML,
//     rightFinal: rightDiv.innerHTML,
//     textSummary: { additions, deletions }
//   };
// };

// export const generateDetailedReport = (leftHtml, rightHtml) => {
//   const L = htmlToDiv(leftHtml);
//   const R = htmlToDiv(rightHtml);

//   const leftLines = collectBlockLinesWithFormat(L);
//   const rightLines = collectBlockLinesWithFormat(R);

//   const leftTexts = leftLines.map((l) => l.text || "");
//   const rightTexts = rightLines.map((l) => l.text || "");
//   const parts = diffArrays(leftTexts, rightTexts, {
//     comparator: (a, b) => areWordsEquivalent(a, b),
//   });

//   const lines = [];
//   let iL = 0,
//     iR = 0,
//     v1 = 1,
//     v2 = 1;

//   for (const part of parts) {
//     const count = part.count || (part.value ? part.value.length : 0);
//     if (part.added) {
//       for (let k = 0; k < count; k++) {
//         const r = rightLines[iR++];
//         if (r && r.text.trim()) {
//           lines.push({
//             v1: "",
//             v2: String(v2++),
//             status: "ADDED",
//             diffHtml: inlineDiffHtml("", r.text),
//             formatChanges: [`added line`],
//           });
//         }
//       }
//       continue;
//     }
//     if (part.removed) {
//       for (let k = 0; k < count; k++) {
//         const l = leftLines[iL++];
//         if (l && l.text.trim()) {
//           lines.push({
//             v1: String(v1++),
//             v2: "",
//             status: "REMOVED",
//             diffHtml: inlineDiffHtml(l.text, ""),
//             formatChanges: [`removed line`],
//           });
//         }
//       }
//       continue;
//     }
//     // unchanged block - may still be formatting-only differences when synced positions differ in formatting
//     for (let k = 0; k < count; k++) {
//       const l = leftLines[iL++];
//       const r = rightLines[iR++];
//       if (!l || !r) continue;

//       const textEqual = areWordsEquivalent(l.text || "", r.text || "");
//       const fmtChanges = compareFormat(l.fmt, r.fmt);

//       if (textEqual && fmtChanges.length > 0) {
//         lines.push({
//           v1: String(v1++),
//           v2: String(v2++),
//           status: "FORMATTING-ONLY",
//           diffHtml: visibleSpaces(escapeHtml(l.text || "")),
//           formatChanges: fmtChanges,
//         });
//       } else if (textEqual) {
//         lines.push({
//           v1: String(v1++),
//           v2: String(v2++),
//           status: "UNCHANGED",
//           diffHtml: visibleSpaces(escapeHtml(l.text || "")),
//           formatChanges: [],
//         });
//       } else if (l.text.trim() || r.text.trim()) {
//         lines.push({
//           v1: String(v1++),
//           v2: String(v2++),
//           status: "MODIFIED",
//           diffHtml: inlineDiffHtml(l.text, r.text),
//           formatChanges: fmtChanges,
//         });
//       }
//     }
//   }

//   // Tables report
//   const tableReport = [];
//   const Lt = Array.from(L.querySelectorAll("table"));
//   const Rt = Array.from(R.querySelectorAll("table"));
//   const tcount = Math.max(Lt.length, Rt.length);
//   for (let ti = 0; ti < tcount; ti++) {
//     const TL = Lt[ti],
//       TR = Rt[ti];
//     if (!TL && TR) {
//       tableReport.push({ table: ti + 1, status: "ADDED" });
//       continue;
//     }
//     if (TL && !TR) {
//       tableReport.push({ table: ti + 1, status: "REMOVED" });
//       continue;
//     }
//     if (!(TL && TR)) continue;
//     const rL = Array.from(TL.rows || []);
//     const rR = Array.from(TR.rows || []);
//     const rcount = Math.max(rL.length, rR.length);
//     for (let ri = 0; ri < rcount; ri++) {
//       const rowL = rL[ri],
//         rowR = rR[ri];
//       if (!rowL && rowR) {
//         tableReport.push({ table: ti + 1, row: ri + 1, status: "ADDED" });
//         continue;
//       }
//       if (rowL && !rowR) {
//         tableReport.push({ table: ti + 1, row: ri + 1, status: "REMOVED" });
//         continue;
//       }
//       const cL = Array.from(rowL.cells || []);
//       const cR = Array.from(rowR.cells || []);
//       const ccount = Math.max(cL.length, cR.length);
//       for (let ci = 0; ci < ccount; ci++) {
//         const cellL = cL[ci],
//           cellR = cR[ci];
//         if (!cellL && cellR) {
//           tableReport.push({
//             table: ti + 1,
//             row: ri + 1,
//             col: ci + 1,
//             status: "ADDED",
//           });
//           continue;
//         }
//         if (cellL && !cellR) {
//           tableReport.push({
//             table: ti + 1,
//             row: ri + 1,
//             col: ci + 1,
//             status: "REMOVED",
//           });
//           continue;
//         }
//         const a = (cellL.textContent || "").trim();
//         const b = (cellR.textContent || "").trim();
//         if (a && b && !areWordsEquivalent(a, b)) {
//           tableReport.push({
//             table: ti + 1,
//             row: ri + 1,
//             col: ci + 1,
//             status: "MODIFIED",
//             diffHtml: inlineDiffHtml(a, b),
//           });
//         }
//       }
//     }
//   }

//   // Images report
//   const Li = Array.from(L.querySelectorAll("img")).map(
//     (i) => i.getAttribute("src") || ""
//   );
//   const Ri = Array.from(R.querySelectorAll("img")).map(
//     (i) => i.getAttribute("src") || ""
//   );
//   const imgReport = [];
//   const imax = Math.max(Li.length, Ri.length);
//   for (let i = 0; i < imax; i++) {
//     const a = Li[i],
//       b = Ri[i];
//     if (a && !b) imgReport.push({ index: i + 1, status: "REMOVED", src: a });
//     else if (!a && b) imgReport.push({ index: i + 1, status: "ADDED", src: b });
//     else if (a && b && a !== b)
//       imgReport.push({ index: i + 1, status: "REPLACED", from: a, to: b });
//   }

//   return { lines, tables: tableReport, images: imgReport };
// };

// // Extract blocks for comparison
// const extractBlocks = (container) => {
//   const blocks = [];
//   const blockElements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, div, li');
  
//   blockElements.forEach((element, index) => {
//     // Skip if element is inside a table or already processed
//     if (isInsideTable(element) || element.closest('.placeholder-block')) {
//       return;
//     }
    
//     const text = (element.textContent || '').trim();
//     const tagName = element.tagName.toLowerCase();
    
//     blocks.push({
//       element,
//       text,
//       tagName,
//       index,
//       id: generateBlockId(element, text, index)
//     });
//   });
  
//   return blocks;
// };

// const isInsideTable = (node) => {
//   let p = node.parentNode;
//   while (p) {
//     if (p.nodeType === 1) {
//       const tag = p.tagName && p.tagName.toLowerCase();
//       if (
//         tag === "table" ||
//         tag === "thead" ||
//         tag === "tbody" ||
//         tag === "tr" ||
//         tag === "td" ||
//         tag === "th"
//       ) {
//         return true;
//       }
//     }
//     p = p.parentNode;
//   }
//   return false;
// };
// // Generate unique ID for block matching
// const generateBlockId = (element, text, index) => {
//   const tagName = element.tagName.toLowerCase();
//   const textHash = text.substring(0, 50); // First 50 chars for matching
//   return `${tagName}-${textHash}-${index}`;
// };
// // Align blocks between documents for comparison
// const alignBlocks = (leftBlocks, rightBlocks) => {
//   const alignment = [];
//   const leftUsed = new Set();
//   const rightUsed = new Set();

//   // First pass: exact matches
//   leftBlocks.forEach((leftBlock, leftIndex) => {
//     const rightIndex = rightBlocks.findIndex((rightBlock, idx) => 
//       !rightUsed.has(idx) && 
//       leftBlock.tagName === rightBlock.tagName &&
//       areTextsEqual(leftBlock.text, rightBlock.text)
//     );
    
//     if (rightIndex !== -1) {
//       alignment.push({
//         left: leftBlock,
//         right: rightBlocks[rightIndex],
//         type: 'equal'
//       });
//       leftUsed.add(leftIndex);
//       rightUsed.add(rightIndex);
//     }
//   });

//   // Second pass: similar content matches
//   leftBlocks.forEach((leftBlock, leftIndex) => {
//     if (leftUsed.has(leftIndex)) return;
    
//     const rightIndex = rightBlocks.findIndex((rightBlock, idx) => 
//       !rightUsed.has(idx) && 
//       leftBlock.tagName === rightBlock.tagName &&
//       getTextSimilarity(leftBlock.text, rightBlock.text) > 0.6
//     );
    
//     if (rightIndex !== -1) {
//       alignment.push({
//         left: leftBlock,
//         right: rightBlocks[rightIndex],
//         type: 'modified'
//       });
//       leftUsed.add(leftIndex);
//       rightUsed.add(rightIndex);
//     }
//   });

//   // Third pass: unmatched blocks
//   leftBlocks.forEach((leftBlock, leftIndex) => {
//     if (!leftUsed.has(leftIndex)) {
//       alignment.push({
//         left: leftBlock,
//         right: null,
//         type: 'removed'
//       });
//     }
//   });

//   rightBlocks.forEach((rightBlock, rightIndex) => {
//     if (!rightUsed.has(rightIndex)) {
//       alignment.push({
//         left: null,
//         right: rightBlock,
//         type: 'added'
//       });
//     }
//   });

//   return alignment.sort((a, b) => {
//     const aIndex = a.left?.index ?? a.right?.index ?? 0;
//     const bIndex = b.left?.index ?? b.right?.index ?? 0;
//     return aIndex - bIndex;
//   });
// };

// // Compare table contents cell by cell
// const compareTableContents = (leftTable, rightTable) => {
//   const leftRows = Array.from(leftTable.rows || []);
//   const rightRows = Array.from(rightTable.rows || []);
  
//   let additions = 0, deletions = 0;
  
//   const maxRows = Math.max(leftRows.length, rightRows.length);
  
//   for (let r = 0; r < maxRows; r++) {
//     const leftRow = leftRows[r];
//     const rightRow = rightRows[r];
    
//     if (leftRow && !rightRow) {
//       leftRow.classList.add("git-row-removed");
//       deletions++;
//     } else if (!leftRow && rightRow) {
//       rightRow.classList.add("git-row-added");
//       additions++;
//     } else if (leftRow && rightRow) {
//       const leftCells = Array.from(leftRow.cells || []);
//       const rightCells = Array.from(rightRow.cells || []);
//       const maxCells = Math.max(leftCells.length, rightCells.length);
      
//       for (let c = 0; c < maxCells; c++) {
//         const leftCell = leftCells[c];
//         const rightCell = rightCells[c];
        
//         if (leftCell && !rightCell) {
//           leftCell.classList.add("git-cell-removed");
//           deletions++;
//         } else if (!leftCell && rightCell) {
//           rightCell.classList.add("git-cell-added");
//           additions++;
//         } else if (leftCell && rightCell) {
//           const leftText = (leftCell.textContent || '').trim();
//           const rightText = (rightCell.textContent || '').trim();
          
//           if (!areTextsEqual(leftText, rightText)) {
//             leftCell.classList.add("git-cell-modified");
//             rightCell.classList.add("git-cell-modified");
            
//             // Apply word-level highlighting within cells
//             applyWordLevelCellDiff(leftCell, leftText, rightText, "left");
//             applyWordLevelCellDiff(rightCell, leftText, rightText, "right");
            
//             additions++;
//             deletions++;
//           }
//         }
//       }
//     }
//   }
  
//   return { tableAdditions: additions, tableDeletions: deletions };
// };

// // Apply word-level highlighting to table cells
// const applyWordLevelCellDiff = (cell, leftText, rightText, side) => {
//   const dmp = new diff_match_patch();
//   const diffs = dmp.diff_main(leftText || "", rightText || "");
//   dmp.diff_cleanupSemantic(diffs);
  
//   const highlighted = applyDiffHighlighting(diffs, side);
//   cell.innerHTML = highlighted;
// };
// // Create table placeholder
// const createTablePlaceholder = (originalTable, type) => {
//   const placeholder = document.createElement('div');
//   placeholder.className = `table-placeholder ${type === 'added' ? 'placeholder-added' : 'placeholder-removed'}`;
  
//   // Copy table dimensions
//   const rect = originalTable.getBoundingClientRect();
//   placeholder.style.width = originalTable.style.width || '100%';
//   placeholder.style.height = originalTable.style.height || `${rect.height}px` || '100px';
//   placeholder.style.border = '2px dashed ' + (type === 'added' ? '#22c55e' : '#ef4444');
//   placeholder.style.backgroundColor = type === 'added' ? '#f0fdf4' : '#fef2f2';
//   placeholder.style.borderRadius = '4px';
//   placeholder.style.display = 'flex';
//   placeholder.style.alignItems = 'center';
//   placeholder.style.justifyContent = 'center';
//   placeholder.style.margin = originalTable.style.margin || '16px 0';
//   placeholder.style.opacity = '0.8';
  
//   // Add indicator
//   const indicator = document.createElement('span');
//   indicator.style.color = type === 'added' ? '#166534' : '#991b1b';
//   indicator.style.fontSize = '14px';
//   indicator.style.fontWeight = 'bold';
//   indicator.textContent = type === 'added' ? '[Table Added]' : '[Table Removed]';
//   placeholder.appendChild(indicator);
  
//   return placeholder;
// };
// // Insert table placeholder
// const insertTablePlaceholder = (container, placeholder, targetIndex) => {
//   const tables = container.querySelectorAll('table');
//   if (targetIndex < tables.length) {
//     tables[targetIndex].parentNode.insertBefore(placeholder, tables[targetIndex]);
//   } else {
//     const lastTable = tables[tables.length - 1];
//     if (lastTable) {
//       lastTable.parentNode.insertBefore(placeholder, lastTable.nextSibling);
//     } else {
//       container.appendChild(placeholder);
//     }
//   }
// };
// // Get text blocks suitable for word-level comparison
// const getTextBlocksForWordComparison = (container) => {
//   const blocks = [];
//   const elements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
  
//   elements.forEach(element => {
//     // Skip if already highlighted or inside table
//     if (element.classList.contains('git-line-added') ||
//         element.classList.contains('git-line-removed') ||
//         element.classList.contains('git-line-modified') ||
//         element.classList.contains('placeholder-block') ||
//         isInsideTable(element)) {
//       return;
//     }
    
//     const text = (element.textContent || '').trim();
//     if (text) {
//       blocks.push({
//         element,
//         text,
//         tagName: element.tagName.toLowerCase()
//       });
//     }
//   });
  
//   return blocks;
// };
// // Align text blocks for word-level comparison
// const alignTextBlocks = (leftBlocks, rightBlocks) => {
//   const alignment = [];
//   const leftUsed = new Set();
//   const rightUsed = new Set();

//   // Match blocks by content similarity
//   leftBlocks.forEach((leftBlock, leftIndex) => {
//     let bestMatch = null;
//     let bestSimilarity = 0;
    
//     rightBlocks.forEach((rightBlock, rightIndex) => {
//       if (rightUsed.has(rightIndex)) return;
      
//       if (leftBlock.tagName === rightBlock.tagName) {
//         const similarity = getTextSimilarity(leftBlock.text, rightBlock.text);
//         if (similarity > bestSimilarity && similarity > 0.3) {
//           bestMatch = { block: rightBlock, index: rightIndex, similarity };
//           bestSimilarity = similarity;
//         }
//       }
//     });
    
//     if (bestMatch) {
//       const type = bestMatch.similarity === 1 ? 'equal' : 'modified';
//       alignment.push({
//         left: leftBlock,
//         right: bestMatch.block,
//         type
//       });
//       leftUsed.add(leftIndex);
//       rightUsed.add(bestMatch.index);
//     }
//   });

//   return alignment;
// };
// const BLOCK_TAGS = new Set([
//   "p",
//   "h1",
//   "h2",
//   "h3",
//   "h4",
//   "h5",
//   "h6",
//   "li",
//   "pre",
//   "div",
// ]);
// // ===== Detailed line-by-line report =====
// const BLOCK_SELECTOR = Array.from(BLOCK_TAGS).join(",");
// const extractLineFeatures = (element) => {
//   // Gather formatting flags inside the block
//   const hasBold = !!element.querySelector("b,strong");
//   const hasItalic = !!element.querySelector("i,em");
//   const hasUnderline = !!element.querySelector("u");
//   const inlineFont =
//     element.style && element.style.fontSize ? element.style.fontSize : "";
//   let fontSize = inlineFont || "";
//   let textAlign =
//     element.style && element.style.textAlign ? element.style.textAlign : "";
//   // fallback to attribute or class hints
//   if (!textAlign) {
//     const alignAttr = element.getAttribute && element.getAttribute("align");
//     if (alignAttr) textAlign = alignAttr;
//   }
//   return { hasBold, hasItalic, hasUnderline, fontSize, textAlign };
// };
// // Word-level equivalence check
// const areWordsEquivalent = (word1, word2) => {
// // Normalize punctuation and case for comparison
// const normalize = (word) => {
//     return word
//       .replace(/[""'']/g, '"')
//       .replace(/[–—]/g, '-')
//       .trim()
//       .toLowerCase();
//   };
  
//   return normalize(word1) === normalize(word2);
// };
// const compareFormat = (fa, fb) => {
//   const changes = [];
//   if (!!fa.hasBold !== !!fb.hasBold)
//     changes.push(
//       `bold: ${fa.hasBold ? "on" : "off"} → ${fb.hasBold ? "on" : "off"}`
//     );
//   if (!!fa.hasItalic !== !!fb.hasItalic)
//     changes.push(
//       `italic: ${fa.hasItalic ? "on" : "off"} → ${fb.hasItalic ? "on" : "off"}`
//     );
//   if (!!fa.hasUnderline !== !!fb.hasUnderline)
//     changes.push(
//       `underline: ${fa.hasUnderline ? "on" : "off"} → ${
//         fb.hasUnderline ? "on" : "off"
//       }`
//     );
//   if ((fa.fontSize || "") !== (fb.fontSize || ""))
//     changes.push(
//       `font-size: ${fa.fontSize || "auto"} → ${fb.fontSize || "auto"}`
//     );
//   if ((fa.textAlign || "") !== (fb.textAlign || ""))
//     changes.push(
//       `alignment: ${fa.textAlign || "auto"} → ${fb.textAlign || "auto"}`
//     );
//   return changes;
// };
// const visibleSpaces = (s) => {
//   if (!s) return "";
//   return s
//     .replace(/ /g, '<span class="ws">·</span>')
//     .replace(/\t/g, '<span class="ws">→</span>');
// };
// const inlineDiffHtml = (a, b) => {
//   const dmp = new diff_match_patch();
//   const diffs = dmp.diff_main(a || "", b || "");
//   dmp.diff_cleanupSemantic(diffs);
  
//   return diffs.map(diff => {
//     const [operation, text] = diff;
//     const val = visibleSpaces(escapeHtml(text));
    
//     if (operation === 1) return `<span class="git-inline-added">${val}</span>`;
//     if (operation === -1) return `<span class="git-inline-removed">${val}</span>`;
//     return val;
//   }).join("");
// };
// const collectBlockLinesWithFormat = (root) => {
//   const blocks = Array.from(root.querySelectorAll(BLOCK_SELECTOR));
//   return blocks
//     .filter((b) => !isInsideTable(b))
//     .map((el, idx) => {
//       const text = el.textContent || "";
//       const fmt = extractLineFeatures(el);
//       return { index: idx, text, fmt, element: el };
//     });
// };
import { diffChars, diffWordsWithSpace, diffArrays, diffSentences, Diff } from "diff";
import { diff_match_patch } from 'diff-match-patch';

export const compareHtmlDocuments = (leftHtml, rightHtml) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        console.log('Starting optimized document comparison with proper alignment...');
        
        // Quick text comparison first
        const leftText = extractPlainText(leftHtml);
        const rightText = extractPlainText(rightHtml);

        if (leftText.trim() === rightText.trim()) {
          console.log('Documents are identical');
          resolve({
            leftDiffs: [{ type: "equal", content: leftHtml }],
            rightDiffs: [{ type: "equal", content: rightHtml }],
            summary: { additions: 0, deletions: 0, changes: 0 },
            detailed: { lines: [], tables: [], images: [] }
          });
          return;
        }

        console.log('Documents differ, performing alignment-preserving comparison...');
        
        // First, ensure structural alignment with proper placeholders
        const { leftAligned, rightAligned, structuralSummary } = 
          ensureStructuralAlignment(leftHtml, rightHtml);

        // Then apply content-level comparisons
        const { leftFinal, rightFinal, contentSummary } =
          applyContentComparison(leftAligned, rightAligned);

        const summary = {
          additions: structuralSummary.additions + contentSummary.additions,
          deletions: structuralSummary.deletions + contentSummary.deletions,
          changes: 0
        };
        summary.changes = summary.additions + summary.deletions;

        const detailed = generateDetailedReport(leftFinal, rightFinal);

        const result = {
          leftDiffs: [{ type: "modified", content: leftFinal }],
          rightDiffs: [{ type: "modified", content: rightFinal }],
          summary,
          detailed
        };

        console.log('Comparison completed successfully with proper alignment');
        resolve(result);
        
      } catch (error) {
        console.error("Error during document comparison:", error);
        resolve({
          leftDiffs: [{ type: "equal", content: leftHtml }],
          rightDiffs: [{ type: "equal", content: rightHtml }],
          summary: { additions: 0, deletions: 0, changes: 0 },
          detailed: { lines: [], tables: [], images: [] },
        });
      }
    }, 10);
  });
};

// Main function to ensure structural alignment between documents
const ensureStructuralAlignment = (leftHtml, rightHtml) => {
  const leftDiv = htmlToDiv(leftHtml);
  const rightDiv = htmlToDiv(rightHtml);
  
  // Step 1: Align tables first (most important for structure)
  const { leftWithTables, rightWithTables, tableSummary } = 
    alignTablesWithPlaceholders(leftDiv, rightDiv);
  
  // Step 2: Align other major structural elements
  const { leftWithBlocks, rightWithBlocks, blockSummary } = 
    alignBlocksWithPlaceholders(leftWithTables, rightWithTables);
  
  return {
    leftAligned: leftWithBlocks.innerHTML,
    rightAligned: rightWithBlocks.innerHTML,
    structuralSummary: {
      additions: tableSummary.additions + blockSummary.additions,
      deletions: tableSummary.deletions + blockSummary.deletions
    }
  };
};

// Improved table alignment with proper placeholders
const alignTablesWithPlaceholders = (leftDiv, rightDiv) => {
  const leftTables = Array.from(leftDiv.querySelectorAll("table"));
  const rightTables = Array.from(rightDiv.querySelectorAll("table"));
  
  let additions = 0, deletions = 0;
  
  // Create a mapping of table positions and their placeholders
  const leftTableMap = new Map();
  const rightTableMap = new Map();
  
  // Map existing tables by their position and basic characteristics
  leftTables.forEach((table, index) => {
    leftTableMap.set(index, {
      table,
      index,
      signature: getTableSignature(table),
      matched: false
    });
  });
  
  rightTables.forEach((table, index) => {
    rightTableMap.set(index, {
      table,
      index,
      signature: getTableSignature(table),
      matched: false
    });
  });
  
  // Phase 1: Match identical tables
  for (const [leftIndex, leftInfo] of leftTableMap) {
    if (leftInfo.matched) continue;
    
    for (const [rightIndex, rightInfo] of rightTableMap) {
      if (rightInfo.matched) continue;
      
      if (areTablesIdentical(leftInfo.table, rightInfo.table)) {
        leftInfo.matched = true;
        rightInfo.matched = true;
        break;
      }
    }
  }
  
  // Phase 2: Match similar tables
  for (const [leftIndex, leftInfo] of leftTableMap) {
    if (leftInfo.matched) continue;
    
    let bestMatch = null;
    let bestSimilarity = 0;
    
    for (const [rightIndex, rightInfo] of rightTableMap) {
      if (rightInfo.matched) continue;
      
      const similarity = getTableSimilarity(leftInfo.table, rightInfo.table);
      if (similarity > bestSimilarity && similarity > 0.5) {
        bestMatch = rightInfo;
        bestSimilarity = similarity;
      }
    }
    
    if (bestMatch) {
      leftInfo.matched = true;
      bestMatch.matched = true;
      
      // Apply detailed table comparison for matched tables
      const { tableAdditions, tableDeletions } = 
        compareTableContents(leftInfo.table, bestMatch.table);
      additions += tableAdditions;
      deletions += tableDeletions;
    }
  }
  
  // Phase 3: Insert placeholders for unmatched tables
  const maxTableCount = Math.max(leftTables.length, rightTables.length);
  
  for (let i = 0; i < maxTableCount; i++) {
    const leftInfo = leftTableMap.get(i);
    const rightInfo = rightTableMap.get(i);
    
    if (leftInfo && !leftInfo.matched) {
      // Table exists in left but not matched in right - add placeholder to right
      const placeholder = createTablePlaceholder(leftInfo.table, 'removed');
      insertPlaceholderAtTablePosition(rightDiv, placeholder, i);
      leftInfo.table.classList.add("structural-removed");
      deletions++;
    }
    
    if (rightInfo && !rightInfo.matched) {
      // Table exists in right but not matched in left - add placeholder to left
      const placeholder = createTablePlaceholder(rightInfo.table, 'added');
      insertPlaceholderAtTablePosition(leftDiv, placeholder, i);
      rightInfo.table.classList.add("structural-added");
      additions++;
    }
  }
  
  return {
    leftWithTables: leftDiv,
    rightWithTables: rightDiv,
    tableSummary: { additions, deletions }
  };
};

// Get table signature for matching
const getTableSignature = (table) => {
  const rows = table.rows ? table.rows.length : 0;
  const cols = table.rows && table.rows[0] ? table.rows[0].cells.length : 0;
  const firstCellText = table.rows && table.rows[0] && table.rows[0].cells[0] 
    ? (table.rows[0].cells[0].textContent || '').trim().substring(0, 50)
    : '';
  
  return {
    rows,
    cols,
    firstCellText,
    totalCells: rows * cols
  };
};

// Check if tables are identical
const areTablesIdentical = (table1, table2) => {
  const sig1 = getTableSignature(table1);
  const sig2 = getTableSignature(table2);
  
  if (sig1.rows !== sig2.rows || sig1.cols !== sig2.cols) return false;
  
  // Compare all cell contents
  for (let r = 0; r < sig1.rows; r++) {
    const row1 = table1.rows[r];
    const row2 = table2.rows[r];
    
    if (!row1 || !row2) return false;
    
    for (let c = 0; c < sig1.cols; c++) {
      const cell1 = row1.cells[c];
      const cell2 = row2.cells[c];
      
      if (!cell1 || !cell2) return false;
      
      const text1 = (cell1.textContent || '').trim();
      const text2 = (cell2.textContent || '').trim();
      
      if (!areTextsEqual(text1, text2)) return false;
    }
  }
  
  return true;
};

// Get table similarity score
const getTableSimilarity = (table1, table2) => {
  const sig1 = getTableSignature(table1);
  const sig2 = getTableSignature(table2);
  
  // Structure similarity
  const structureSimilarity = 
    (sig1.rows === sig2.rows ? 0.3 : 0) + 
    (sig1.cols === sig2.cols ? 0.3 : 0);
  
  // Content similarity
  let contentSimilarity = 0;
  const minRows = Math.min(sig1.rows, sig2.rows);
  const minCols = Math.min(sig1.cols, sig2.cols);
  
  if (minRows > 0 && minCols > 0) {
    let matchingCells = 0;
    let totalCells = 0;
    
    for (let r = 0; r < minRows; r++) {
      const row1 = table1.rows[r];
      const row2 = table2.rows[r];
      
      if (row1 && row2) {
        for (let c = 0; c < minCols; c++) {
          const cell1 = row1.cells[c];
          const cell2 = row2.cells[c];
          
          if (cell1 && cell2) {
            totalCells++;
            const text1 = (cell1.textContent || '').trim();
            const text2 = (cell2.textContent || '').trim();
            
            if (areTextsEqual(text1, text2) || getTextSimilarity(text1, text2) > 0.8) {
              matchingCells++;
            }
          }
        }
      }
    }
    
    contentSimilarity = totalCells > 0 ? (matchingCells / totalCells) * 0.4 : 0;
  }
  
  return structureSimilarity + contentSimilarity;
};

// Insert placeholder at specific table position
const insertPlaceholderAtTablePosition = (container, placeholder, targetIndex) => {
  const allTables = Array.from(container.querySelectorAll('table, .table-placeholder'));
  
  if (targetIndex < allTables.length) {
    // Insert before the target position
    allTables[targetIndex].parentNode.insertBefore(placeholder, allTables[targetIndex]);
  } else if (allTables.length > 0) {
    // Insert after the last table
    const lastTable = allTables[allTables.length - 1];
    lastTable.parentNode.insertBefore(placeholder, lastTable.nextSibling);
  } else {
    // No tables exist, append to container
    container.appendChild(placeholder);
  }
};

// Create improved table placeholder that maintains document structure
const createTablePlaceholder = (originalTable, type) => {
  const placeholder = document.createElement('div');
  placeholder.className = `table-placeholder placeholder-${type}`;
  
  // Calculate approximate dimensions
  let height = '100px';
  let width = '100%';
  
  try {
    const rows = originalTable.rows ? originalTable.rows.length : 3;
    const estimatedRowHeight = 35; // approximate row height
    height = `${Math.max(60, rows * estimatedRowHeight)}px`;
    
    if (originalTable.style.width) {
      width = originalTable.style.width;
    }
  } catch (e) {
    console.warn('Error calculating table dimensions:', e);
  }
  
  // Style the placeholder to maintain layout
  Object.assign(placeholder.style, {
    width,
    minHeight: height,
    border: `2px dashed ${type === 'added' ? '#22c55e' : '#ef4444'}`,
    backgroundColor: type === 'added' ? '#f0fdf4' : '#fef2f2',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: originalTable.style.margin || '16px 0',
    padding: '20px',
    opacity: '0.8',
    boxSizing: 'border-box'
  });
  
  // Add descriptive content
  const iconSpan = document.createElement('span');
  iconSpan.style.cssText = `
    font-size: 24px; 
    margin-bottom: 8px;
    color: ${type === 'added' ? '#166534' : '#991b1b'};
  `;
  iconSpan.textContent = type === 'added' ? '📋' : '🗑️';
  
  const textSpan = document.createElement('span');
  textSpan.style.cssText = `
    color: ${type === 'added' ? '#166534' : '#991b1b'};
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  `;
  textSpan.textContent = type === 'added' ? 'Table Added' : 'Table Removed';
  
  const detailSpan = document.createElement('span');
  detailSpan.style.cssText = `
    color: ${type === 'added' ? '#166534' : '#991b1b'};
    font-size: 12px;
    margin-top: 4px;
    opacity: 0.8;
    text-align: center;
  `;
  
  try {
    const rows = originalTable.rows ? originalTable.rows.length : 0;
    const cols = originalTable.rows && originalTable.rows[0] ? originalTable.rows[0].cells.length : 0;
    detailSpan.textContent = `${rows} rows × ${cols} columns`;
  } catch (e) {
    detailSpan.textContent = 'Table structure';
  }
  
  placeholder.appendChild(iconSpan);
  placeholder.appendChild(textSpan);
  placeholder.appendChild(detailSpan);
  
  return placeholder;
};

// Apply content-level comparisons after structural alignment
const applyContentComparison = (leftHtml, rightHtml) => {
  const leftDiv = htmlToDiv(leftHtml);
  const rightDiv = htmlToDiv(rightHtml);
  
  // Apply word-level comparison to text blocks
  const { leftWithText, rightWithText, textSummary } =
    applyMutualWordLevelComparison(leftDiv, rightDiv);
  
  return {
    leftFinal: leftWithText,
    rightFinal: rightWithText,
    contentSummary: textSummary
  };
};

// Block alignment with placeholders (for non-table elements)
const alignBlocksWithPlaceholders = (leftDiv, rightDiv) => {
  const leftBlocks = extractBlocks(leftDiv);
  const rightBlocks = extractBlocks(rightDiv);
  
  let additions = 0, deletions = 0;
  
  // Simple block alignment using diffArrays
  const blockTexts = (blocks) => blocks.map(b => b.text);
  const diff = diffArrays(blockTexts(leftBlocks), blockTexts(rightBlocks));
  
  let leftIndex = 0, rightIndex = 0;
  
  diff.forEach(part => {
    if (part.added) {
      // Blocks added in right - add placeholders to left
      for (let i = 0; i < part.count; i++) {
        const rightBlock = rightBlocks[rightIndex++];
        if (rightBlock) {
          const placeholder = createBlockPlaceholder(rightBlock, 'added');
          insertBlockPlaceholder(leftDiv, placeholder, leftIndex);
          rightBlock.element.classList.add("structural-added");
          additions++;
        }
      }
    } else if (part.removed) {
      // Blocks removed from right - add placeholders to right
      for (let i = 0; i < part.count; i++) {
        const leftBlock = leftBlocks[leftIndex++];
        if (leftBlock) {
          const placeholder = createBlockPlaceholder(leftBlock, 'removed');
          insertBlockPlaceholder(rightDiv, placeholder, rightIndex);
          leftBlock.element.classList.add("structural-removed");
          deletions++;
        }
      }
    } else {
      // Equal blocks - advance both indices
      for (let i = 0; i < part.count; i++) {
        leftIndex++;
        rightIndex++;
      }
    }
  });
  
  return {
    leftWithBlocks: leftDiv,
    rightWithBlocks: rightDiv,
    blockSummary: { additions, deletions }
  };
};

// Create block placeholder
const createBlockPlaceholder = (originalBlock, type) => {
  const placeholder = document.createElement('div');
  placeholder.className = `block-placeholder placeholder-${type}`;
  
  Object.assign(placeholder.style, {
    minHeight: '1.5em',
    border: `1px dashed ${type === 'added' ? '#22c55e' : '#ef4444'}`,
    backgroundColor: type === 'added' ? '#f0fdf4' : '#fef2f2',
    borderRadius: '3px',
    padding: '4px 8px',
    margin: '4px 0',
    opacity: '0.7',
    fontSize: '12px',
    fontStyle: 'italic',
    color: type === 'added' ? '#166534' : '#991b1b'
  });
  
  placeholder.textContent = `[${type === 'added' ? 'Block Added' : 'Block Removed'}: ${originalBlock.tagName.toUpperCase()}]`;
  
  return placeholder;
};

// Insert block placeholder
const insertBlockPlaceholder = (container, placeholder, index) => {
  const blocks = extractBlocks(container);
  if (index < blocks.length) {
    blocks[index].element.parentNode.insertBefore(placeholder, blocks[index].element);
  } else if (blocks.length > 0) {
    const lastBlock = blocks[blocks.length - 1];
    lastBlock.element.parentNode.insertBefore(placeholder, lastBlock.element.nextSibling);
  } else {
    container.appendChild(placeholder);
  }
};

// Rest of the utility functions (keeping existing ones that work well)
const htmlToDiv = (html) => {
  if (!html) return document.createElement("div");
  
  const d = document.createElement("div");
  try {
    d.innerHTML = html;
  } catch (error) {
    console.warn('Error parsing HTML:', error);
  }
  return d;
};

const extractPlainText = (html) => {
  if (!html) return "";
  
  const tempDiv = document.createElement("div");
  try {
    tempDiv.innerHTML = html;
  } catch (error) {
    console.warn('Error extracting plain text:', error);
    return "";
  }
  return tempDiv.textContent || "";
};

const areTextsEqual = (text1, text2) => {
  const normalize = (text) => text.trim().replace(/\s+/g, ' ').toLowerCase();
  return normalize(text1) === normalize(text2);
};

const getTextSimilarity = (text1, text2) => {
  if (!text1 && !text2) return 1;
  if (!text1 || !text2) return 0;
  
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(text1, text2);
  
  let totalLength = Math.max(text1.length, text2.length);
  let unchangedLength = 0;
  
  diffs.forEach(diff => {
    if (diff[0] === 0) {
      unchangedLength += diff[1].length;
    }
  });
  
  return totalLength > 0 ? unchangedLength / totalLength : 0;
};

const escapeHtml = (text) => {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
};

// Extract blocks for comparison
const extractBlocks = (container) => {
  const blocks = [];
  const blockElements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, div, li');
  
  blockElements.forEach((element, index) => {
    // Skip if element is inside a table, already processed, or is a placeholder
    if (isInsideTable(element) || 
        element.closest('.placeholder-block') ||
        element.classList.contains('table-placeholder') ||
        element.classList.contains('block-placeholder')) {
      return;
    }
    
    const text = (element.textContent || '').trim();
    const tagName = element.tagName.toLowerCase();
    
    if (text) { // Only include blocks with content
      blocks.push({
        element,
        text,
        tagName,
        index,
        id: generateBlockId(element, text, index)
      });
    }
  });
  
  return blocks;
};

const isInsideTable = (node) => {
  let p = node.parentNode;
  while (p) {
    if (p.nodeType === 1) {
      const tag = p.tagName && p.tagName.toLowerCase();
      if (tag === "table" || tag === "thead" || tag === "tbody" || 
          tag === "tr" || tag === "td" || tag === "th") {
        return true;
      }
    }
    p = p.parentNode;
  }
  return false;
};

const generateBlockId = (element, text, index) => {
  const tagName = element.tagName.toLowerCase();
  const textHash = text.substring(0, 50);
  return `${tagName}-${textHash}-${index}`;
};

// Compare table contents cell by cell
const compareTableContents = (leftTable, rightTable) => {
  const leftRows = Array.from(leftTable.rows || []);
  const rightRows = Array.from(rightTable.rows || []);
  
  let additions = 0, deletions = 0;
  
  const maxRows = Math.max(leftRows.length, rightRows.length);
  
  for (let r = 0; r < maxRows; r++) {
    const leftRow = leftRows[r];
    const rightRow = rightRows[r];
    
    if (leftRow && !rightRow) {
      leftRow.classList.add("git-row-removed");
      deletions++;
    } else if (!leftRow && rightRow) {
      rightRow.classList.add("git-row-added");
      additions++;
    } else if (leftRow && rightRow) {
      const leftCells = Array.from(leftRow.cells || []);
      const rightCells = Array.from(rightRow.cells || []);
      const maxCells = Math.max(leftCells.length, rightCells.length);
      
      for (let c = 0; c < maxCells; c++) {
        const leftCell = leftCells[c];
        const rightCell = rightCells[c];
        
        if (leftCell && !rightCell) {
          leftCell.classList.add("git-cell-removed");
          deletions++;
        } else if (!leftCell && rightCell) {
          rightCell.classList.add("git-cell-added");
          additions++;
        } else if (leftCell && rightCell) {
          const leftText = (leftCell.textContent || '').trim();
          const rightText = (rightCell.textContent || '').trim();
          
          if (!areTextsEqual(leftText, rightText)) {
            leftCell.classList.add("git-cell-modified");
            rightCell.classList.add("git-cell-modified");
            
            // Apply word-level highlighting within cells
            applyWordLevelCellDiff(leftCell, leftText, rightText, "left");
            applyWordLevelCellDiff(rightCell, leftText, rightText, "right");
            
            additions++;
            deletions++;
          }
        }
      }
    }
  }
  
  return { tableAdditions: additions, tableDeletions: deletions };
};

// Apply word-level highlighting to table cells
const applyWordLevelCellDiff = (cell, leftText, rightText, side) => {
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(leftText || "", rightText || "");
  dmp.diff_cleanupSemantic(diffs);
  
  const highlighted = applyDiffHighlighting(diffs, side);
  cell.innerHTML = highlighted;
};

// Apply diff highlighting for mutual comparison
const applyDiffHighlighting = (diffs, side) => {
  let html = '';
  
  diffs.forEach(diff => {
    const [operation, text] = diff;
    
    if (operation === 0) {
      // Unchanged text
      html += escapeHtml(text);
    } else if (operation === 1) {
      // Added text
      if (side === 'right') {
        html += `<span class="git-inline-added">${escapeHtml(text)}</span>`;
      } else {
        html += `<span class="git-inline-placeholder" style="color: #22c55e; font-style: italic; opacity: 0.7; background: #f0fdf4; padding: 1px 3px; border-radius: 2px;">[+${escapeHtml(text)}]</span>`;
      }
    } else if (operation === -1) {
      // Removed text
      if (side === 'left') {
        html += `<span class="git-inline-removed">${escapeHtml(text)}</span>`;
      } else {
        html += `<span class="git-inline-placeholder" style="color: #ef4444; font-style: italic; opacity: 0.7; background: #fef2f2; padding: 1px 3px; border-radius: 2px;">[-${escapeHtml(text)}]</span>`;
      }
    }
  });
  
  return html;
};

// Mutual word-level comparison using diff-match-patch
const applyMutualWordLevelComparison = (leftDiv, rightDiv) => {
  // Get all text blocks that aren't already highlighted
  const leftBlocks = getTextBlocksForWordComparison(leftDiv);
  const rightBlocks = getTextBlocksForWordComparison(rightDiv);

  let additions = 0, deletions = 0;

  // Align blocks for word-level comparison
  const blockAlignment = alignTextBlocks(leftBlocks, rightBlocks);

  blockAlignment.forEach(({ left, right, type }) => {
    if (type === 'modified' && left && right) {
      const leftText = left.text;
      const rightText = right.text;
      
      // Use diff-match-patch for precise word-level comparison
      const dmp = new diff_match_patch();
      const diffs = dmp.diff_main(leftText, rightText);
      dmp.diff_cleanupSemantic(diffs);
      
      // Apply highlighting to both elements
      const leftHighlighted = applyDiffHighlighting(diffs, 'left');
      const rightHighlighted = applyDiffHighlighting(diffs, 'right');
      
      left.element.innerHTML = leftHighlighted;
      right.element.innerHTML = rightHighlighted;
      
      // Count changes
      diffs.forEach(diff => {
        if (diff[0] === 1) additions++; // Added
        if (diff[0] === -1) deletions++; // Removed
      });
    }
  });

  return {
    leftWithText: leftDiv.innerHTML,
    rightWithText: rightDiv.innerHTML,
    textSummary: { additions, deletions }
  };
};

// Get text blocks suitable for word-level comparison
const getTextBlocksForWordComparison = (container) => {
  const blocks = [];
  const elements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
  
  elements.forEach(element => {
    // Skip if already highlighted or inside table or is a placeholder
    if (element.classList.contains('git-line-added') ||
        element.classList.contains('git-line-removed') ||
        element.classList.contains('git-line-modified') ||
        element.classList.contains('placeholder-block') ||
        element.classList.contains('table-placeholder') ||
        element.classList.contains('block-placeholder') ||
        isInsideTable(element)) {
      return;
    }
    
    const text = (element.textContent || '').trim();
    if (text) {
      blocks.push({
        element,
        text,
        tagName: element.tagName.toLowerCase()
      });
    }
  });
  
  return blocks;
};

// Align text blocks for word-level comparison
const alignTextBlocks = (leftBlocks, rightBlocks) => {
  const alignment = [];
  const leftUsed = new Set();
  const rightUsed = new Set();

  // Match blocks by content similarity
  leftBlocks.forEach((leftBlock, leftIndex) => {
    let bestMatch = null;
    let bestSimilarity = 0;
    
    rightBlocks.forEach((rightBlock, rightIndex) => {
      if (rightUsed.has(rightIndex)) return;
      
      if (leftBlock.tagName === rightBlock.tagName) {
        const similarity = getTextSimilarity(leftBlock.text, rightBlock.text);
        if (similarity > bestSimilarity && similarity > 0.3) {
          bestMatch = { block: rightBlock, index: rightIndex, similarity };
          bestSimilarity = similarity;
        }
      }
    });
    
    if (bestMatch) {
      const type = bestMatch.similarity === 1 ? 'equal' : 'modified';
      alignment.push({
        left: leftBlock,
        right: bestMatch.block,
        type
      });
      leftUsed.add(leftIndex);
      rightUsed.add(bestMatch.index);
    }
  });

  return alignment;
};

// Keep existing detailed report generation functions
export const renderHtmlDifferences = (diffs) => {
  return diffs.map((d) => d.content).join("");
};

export const highlightDifferences = (diffs) => {
  return diffs
    .map((diff) => {
      switch (diff.type) {
        case "insert":
          return `<span class=\"diff-insert\">${escapeHtml(
            diff.content
          )}</span>`;
        case "delete":
          return `<span class=\"diff-delete\">${escapeHtml(
            diff.content
          )}</span>`;
        default:
          return escapeHtml(diff.content);
      }
    })
    .join("");
};

// Detailed report generation functions
export const generateDetailedReport = (leftHtml, rightHtml) => {
  const L = htmlToDiv(leftHtml);
  const R = htmlToDiv(rightHtml);

  const leftLines = collectBlockLinesWithFormat(L);
  const rightLines = collectBlockLinesWithFormat(R);

  const leftTexts = leftLines.map((l) => l.text || "");
  const rightTexts = rightLines.map((l) => l.text || "");
  const parts = diffArrays(leftTexts, rightTexts, {
    comparator: (a, b) => areWordsEquivalent(a, b),
  });

  const lines = [];
  let iL = 0,
    iR = 0,
    v1 = 1,
    v2 = 1;

  for (const part of parts) {
    const count = part.count || (part.value ? part.value.length : 0);
    if (part.added) {
      for (let k = 0; k < count; k++) {
        const r = rightLines[iR++];
        if (r && r.text.trim()) {
          lines.push({
            v1: "",
            v2: String(v2++),
            status: "ADDED",
            diffHtml: inlineDiffHtml("", r.text),
            formatChanges: [`added line`],
          });
        }
      }
      continue;
    }
    if (part.removed) {
      for (let k = 0; k < count; k++) {
        const l = leftLines[iL++];
        if (l && l.text.trim()) {
          lines.push({
            v1: String(v1++),
            v2: "",
            status: "REMOVED",
            diffHtml: inlineDiffHtml(l.text, ""),
            formatChanges: [`removed line`],
          });
        }
      }
      continue;
    }
    // unchanged block - may still be formatting-only differences when synced positions differ in formatting
    for (let k = 0; k < count; k++) {
      const l = leftLines[iL++];
      const r = rightLines[iR++];
      if (!l || !r) continue;

      const textEqual = areWordsEquivalent(l.text || "", r.text || "");
      const fmtChanges = compareFormat(l.fmt, r.fmt);

      if (textEqual && fmtChanges.length > 0) {
        lines.push({
          v1: String(v1++),
          v2: String(v2++),
          status: "FORMATTING-ONLY",
          diffHtml: visibleSpaces(escapeHtml(l.text || "")),
          formatChanges: fmtChanges,
        });
      } else if (textEqual) {
        lines.push({
          v1: String(v1++),
          v2: String(v2++),
          status: "UNCHANGED",
          diffHtml: visibleSpaces(escapeHtml(l.text || "")),
          formatChanges: [],
        });
      } else if (l.text.trim() || r.text.trim()) {
        lines.push({
          v1: String(v1++),
          v2: String(v2++),
          status: "MODIFIED",
          diffHtml: inlineDiffHtml(l.text, r.text),
          formatChanges: fmtChanges,
        });
      }
    }
  }

  // Tables report
  const tableReport = [];
  const Lt = Array.from(L.querySelectorAll("table"));
  const Rt = Array.from(R.querySelectorAll("table"));
  const tcount = Math.max(Lt.length, Rt.length);
  for (let ti = 0; ti < tcount; ti++) {
    const TL = Lt[ti],
      TR = Rt[ti];
    if (!TL && TR) {
      tableReport.push({ table: ti + 1, status: "ADDED" });
      continue;
    }
    if (TL && !TR) {
      tableReport.push({ table: ti + 1, status: "REMOVED" });
      continue;
    }
    if (!(TL && TR)) continue;
    const rL = Array.from(TL.rows || []);
    const rR = Array.from(TR.rows || []);
    const rcount = Math.max(rL.length, rR.length);
    for (let ri = 0; ri < rcount; ri++) {
      const rowL = rL[ri],
        rowR = rR[ri];
      if (!rowL && rowR) {
        tableReport.push({ table: ti + 1, row: ri + 1, status: "ADDED" });
        continue;
      }
      if (rowL && !rowR) {
        tableReport.push({ table: ti + 1, row: ri + 1, status: "REMOVED" });
        continue;
      }
      const cL = Array.from(rowL.cells || []);
      const cR = Array.from(rowR.cells || []);
      const ccount = Math.max(cL.length, cR.length);
      for (let ci = 0; ci < ccount; ci++) {
        const cellL = cL[ci],
          cellR = cR[ci];
        if (!cellL && cellR) {
          tableReport.push({
            table: ti + 1,
            row: ri + 1,
            col: ci + 1,
            status: "ADDED",
          });
          continue;
        }
        if (cellL && !cellR) {
          tableReport.push({
            table: ti + 1,
            row: ri + 1,
            col: ci + 1,
            status: "REMOVED",
          });
          continue;
        }
        const a = (cellL.textContent || "").trim();
        const b = (cellR.textContent || "").trim();
        if (a && b && !areWordsEquivalent(a, b)) {
          tableReport.push({
            table: ti + 1,
            row: ri + 1,
            col: ci + 1,
            status: "MODIFIED",
            diffHtml: inlineDiffHtml(a, b),
          });
        }
      }
    }
  }

  // Images report
  const Li = Array.from(L.querySelectorAll("img")).map(
    (i) => i.getAttribute("src") || ""
  );
  const Ri = Array.from(R.querySelectorAll("img")).map(
    (i) => i.getAttribute("src") || ""
  );
  const imgReport = [];
  const imax = Math.max(Li.length, Ri.length);
  for (let i = 0; i < imax; i++) {
    const a = Li[i],
      b = Ri[i];
    if (a && !b) imgReport.push({ index: i + 1, status: "REMOVED", src: a });
    else if (!a && b) imgReport.push({ index: i + 1, status: "ADDED", src: b });
    else if (a && b && a !== b)
      imgReport.push({ index: i + 1, status: "REPLACED", from: a, to: b });
  }

  return { lines, tables: tableReport, images: imgReport };
};

// Simplified detailed report generation
export const generateSimpleDetailedReport = (leftLines, rightLines) => {
  try {
    const lines = [];
    const maxLines = Math.max(leftLines.length, rightLines.length);
    
    for (let i = 0; i < maxLines; i++) {
      const leftLine = leftLines[i];
      const rightLine = rightLines[i];
      
      if (leftLine && rightLine) {
        if (areTextsEqual(leftLine.text, rightLine.text)) {
          lines.push({
            v1: String(i + 1),
            v2: String(i + 1),
            status: "UNCHANGED",
            diffHtml: escapeHtml(leftLine.text),
            formatChanges: []
          });
        } else {
          const diffHtml = createInlineDiff(leftLine.text, rightLine.text);
          lines.push({
            v1: String(i + 1),
            v2: String(i + 1),
            status: "MODIFIED",
            diffHtml,
            formatChanges: ["Content modified"]
          });
        }
      } else if (leftLine && !rightLine) {
        lines.push({
          v1: String(i + 1),
          v2: "",
          status: "REMOVED",
          diffHtml: `<span class="git-inline-removed">${escapeHtml(leftLine.text)}</span>`,
          formatChanges: ["Line removed"]
        });
      } else if (!leftLine && rightLine) {
        lines.push({
          v1: "",
          v2: String(i + 1),
          status: "ADDED",
          diffHtml: `<span class="git-inline-added">${escapeHtml(rightLine.text)}</span>`,
          formatChanges: ["Line added"]
        });
      }
    }

    return { lines, tables: [], images: [] };
  } catch (error) {
    console.error('Error generating detailed report:', error);
    return { lines: [], tables: [], images: [] };
  }
};

// Helper functions for detailed reports
const BLOCK_TAGS = new Set([
  "p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "pre", "div",
]);

const BLOCK_SELECTOR = Array.from(BLOCK_TAGS).join(",");

const extractLineFeatures = (element) => {
  const hasBold = !!element.querySelector("b,strong");
  const hasItalic = !!element.querySelector("i,em");
  const hasUnderline = !!element.querySelector("u");
  const inlineFont =
    element.style && element.style.fontSize ? element.style.fontSize : "";
  let fontSize = inlineFont || "";
  let textAlign =
    element.style && element.style.textAlign ? element.style.textAlign : "";
  
  if (!textAlign) {
    const alignAttr = element.getAttribute && element.getAttribute("align");
    if (alignAttr) textAlign = alignAttr;
  }
  
  return { hasBold, hasItalic, hasUnderline, fontSize, textAlign };
};

const areWordsEquivalent = (word1, word2) => {
  const normalize = (word) => {
    return word
      .replace(/[""'']/g, '"')
      .replace(/[–—]/g, '-')
      .trim()
      .toLowerCase();
  };
  
  return normalize(word1) === normalize(word2);
};

const compareFormat = (fa, fb) => {
  const changes = [];
  if (!!fa.hasBold !== !!fb.hasBold)
    changes.push(
      `bold: ${fa.hasBold ? "on" : "off"} → ${fb.hasBold ? "on" : "off"}`
    );
  if (!!fa.hasItalic !== !!fb.hasItalic)
    changes.push(
      `italic: ${fa.hasItalic ? "on" : "off"} → ${fb.hasItalic ? "on" : "off"}`
    );
  if (!!fa.hasUnderline !== !!fb.hasUnderline)
    changes.push(
      `underline: ${fa.hasUnderline ? "on" : "off"} → ${
        fb.hasUnderline ? "on" : "off"
      }`
    );
  if ((fa.fontSize || "") !== (fb.fontSize || ""))
    changes.push(
      `font-size: ${fa.fontSize || "auto"} → ${fb.fontSize || "auto"}`
    );
  if ((fa.textAlign || "") !== (fb.textAlign || ""))
    changes.push(
      `alignment: ${fa.textAlign || "auto"} → ${fb.textAlign || "auto"}`
    );
  return changes;
};

const visibleSpaces = (s) => {
  if (!s) return "";
  return s
    .replace(/ /g, '<span class="ws">·</span>')
    .replace(/\t/g, '<span class="ws">→</span>');
};

const inlineDiffHtml = (a, b) => {
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(a || "", b || "");
  dmp.diff_cleanupSemantic(diffs);
  
  return diffs.map(diff => {
    const [operation, text] = diff;
    const val = visibleSpaces(escapeHtml(text));
    
    if (operation === 1) return `<span class="git-inline-added">${val}</span>`;
    if (operation === -1) return `<span class="git-inline-removed">${val}</span>`;
    return val;
  }).join("");
};

const createInlineDiff = (leftText, rightText) => {
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(leftText || "", rightText || "");
  dmp.diff_cleanupSemantic(diffs);
  
  return diffs.map(diff => {
    const [operation, text] = diff;
    const escaped = escapeHtml(text);
    
    if (operation === 1) return `<span class="git-inline-added">${escaped}</span>`;
    if (operation === -1) return `<span class="git-inline-removed">${escaped}</span>`;
    return escaped;
  }).join("");
};

const collectBlockLinesWithFormat = (root) => {
  const blocks = Array.from(root.querySelectorAll(BLOCK_SELECTOR));
  return blocks
    .filter((b) => !isInsideTable(b) && 
                   !b.classList.contains('table-placeholder') && 
                   !b.classList.contains('block-placeholder'))
    .map((el, idx) => {
      const text = el.textContent || "";
      const fmt = extractLineFeatures(el);
      return { index: idx, text, fmt, element: el };
    });
};