// --- HELPER: Render Related Concepts Badge ---
function renderBadges(node) {
    if (!node.related_concepts || node.related_concepts.length === 0) return '';
    return `<span class="meta-tag" title="Related to: ${node.related_concepts.join(', ')}">🔗 ${node.related_concepts.length} Related</span>`;
}

// --- MODE 1: DIRECTORY RECURSION ---
function buildDirectoryHTML(node) {
    const hasChildren = node.children && node.children.length > 0;
    const badges = renderBadges(node);

    if (hasChildren) {
        let childrenHTML = node.children.map(child => buildDirectoryHTML(child)).join('');
        return `
            <li>
                <details open>
                    <summary>${node.name} ${badges}</summary>
                    <ul>${childrenHTML}</ul>
                </details>
            </li>`;
    } else {
        return `
            <li>
                <span class="node-leaf">${node.name} ${badges}</span>
            </li>`;
    }
}

// --- MODE 2: GRAPH RECURSION (TABLE-BASED LAYOUT) ---
// Using tables is the most robust way to align trees in pure HTML/CSS without absolute positioning math
function buildGraphHTML(node) {
    const hasChildren = node.children && node.children.length > 0;
    const badges = renderBadges(node);
    const problemCount = node.problems ? node.problems.length : 0;
    
    const cardHTML = `
        <div class="cv-node-card">
            <span class="cv-node-title">${node.name}</span>
            ${badges}
            ${problemCount > 0 ? `<div class="cv-node-problems">${problemCount} Problems</div>` : ''}
        </div>
    `;

    if (!hasChildren) {
        return `
            <table>
                <tr><td colspan="2">${cardHTML}</td></tr>
            </table>`;
    }

    let childrenCells = '';
    node.children.forEach((child, index) => {
        // Logic to draw connecting lines
        const isFirst = index === 0;
        const isLast = index === node.children.length - 1;
        
        let lineHTML = '';
        
        // We need a row above the child to hold the connector lines
        // Left Line | Right Line
        if (node.children.length > 1) {
             const leftClass = isFirst ? '' : 'cv-line-top cv-line-left'; // Line comes from right, goes down
             const rightClass = isLast ? '' : 'cv-line-top cv-line-right'; // Line comes from left, goes down
             // Middle nodes need both borders
             
             // Special case: if only 2 children, or middle child
             lineHTML = `
                <tr>
                    <td class="${isFirst ? '' : 'cv-line-top'} ${isLast ? '' : 'cv-line-left'}">&nbsp;</td>
                    <td class="${isFirst ? '' : 'cv-line-top'} ${isLast ? '' : 'cv-line-right'}">&nbsp;</td>
                </tr>
             `;
        } else {
            // Single child, just a straight line down
            lineHTML = `<tr><td colspan="2"><div class="cv-line-down"></div></td></tr>`;
        }

        childrenCells += `
            <td>
                <table>
                    ${lineHTML}
                    <tr><td colspan="2">${buildGraphHTML(child)}</td></tr>
                </table>
            </td>
        `;
    });

    return `
        <table>
            <tr>
                <td colspan="${node.children.length * 2}">
                    ${cardHTML}
                    <div class="cv-line-down"></div>
                </td>
            </tr>
            <tr>
                ${childrenCells}
            </tr>
        </table>
    `;
}

// --- PUBLIC API ---
return {
    /**
     * Renders the tree into a container.
     * @param {Object} data - The JSON tree object (must have a single root object or be the root itself).
     * @param {HTMLElement} element - The DOM element to append to.
     * @param {string} mode - 'directory' or 'graph'.
     */
    render: function(data, element, mode = 'directory') {
        if (!element) {
            console.error("Target element not found.");
            return;
        }

        // Normalize data: if data is wrapper {root: {...}}, use data.root
        const rootNode = data.root ? data.root : data;

        let contentHTML = '';
        
        if (mode === 'directory') {
            contentHTML = `
                <div class="cv-directory">
                    <ul>${buildDirectoryHTML(rootNode)}</ul>
                </div>`;
        } else if (mode === 'graph') {
            contentHTML = `
                <div class="cv-graph">
                    ${buildGraphHTML(rootNode)}
                </div>`;
        } else {
            contentHTML = `<p>Error: Unknown mode '${mode}'</p>`;
        }

        element.innerHTML = CSS_STYLES + `<div class="cv-container">${contentHTML}</div>`;
    }
};