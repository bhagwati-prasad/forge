/**
 * ConceptVisualizer Module
 * Renders a hierarchical JSON tree in two modes: 'directory' and 'graph'.
 */

const CSS_STYLES = `
<style>
    :root {
        --cv-primary: #2563eb;
        --cv-bg: #ffffff;
        --cv-border: #cbd5e1;
        --cv-text: #1e293b;
        --cv-line-color: #94a3b8;
    }

    .cv-container {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        color: var(--cv-text);
        padding: 40px;
        background: var(--cv-bg);
    }

    /* --- MODE 1: DIRECTORY TREE (Collapsible) --- */
    .cv-directory ul {
        list-style-type: none;
        padding-left: 24px;
        margin: 0;
        border-left: 1px dashed var(--cv-border);
    }
    
    .cv-directory li {
        margin: 8px 0;
        position: relative;
    }

    .cv-directory details > summary {
        cursor: pointer;
        font-weight: 600;
        padding: 6px 10px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        list-style: none;
        user-select: none;
    }

    .cv-directory details > summary:hover {
        background: #f1f5f9;
    }

    .cv-directory details > summary::-webkit-details-marker {
        display: none;
    }

    /* Toggle Icon */
    .cv-directory details > summary:before {
        content: '';
        display: inline-block;
        width: 0; height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 8px solid var(--cv-line-color);
        margin-right: 10px;
        transition: transform 0.2s;
    }

    .cv-directory details[open] > summary:before {
        transform: rotate(90deg);
    }

    .cv-directory .node-leaf {
        padding: 4px 10px;
        margin-left: 18px;
        display: block;
        color: #475569;
    }

    .cv-directory .meta-tag {
        font-size: 0.75rem;
        background: #f1f5f9;
        color: #64748b;
        padding: 2px 8px;
        border-radius: 12px;
        margin-left: 8px;
        border: 1px solid #e2e8f0;
    }

    /* --- MODE 2: GRAPH (ORG CHART) --- */
    .cv-graph {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .cv-graph table {
        border-collapse: separate;
        border-spacing: 0;
        margin: 0 auto;
    }

    .cv-graph td {
        text-align: center;
        vertical-align: top;
        padding: 0;
    }

    .cv-node-card {
        border: 1px solid var(--cv-border);
        background: white;
        padding: 12px 16px;
        border-radius: 8px;
        display: inline-block;
        min-width: 140px;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        margin: 0 10px;
    }

    .cv-node-title {
        font-weight: 700;
        font-size: 0.9rem;
        display: block;
        color: var(--cv-primary);
    }

    .cv-node-problems {
        font-size: 0.7rem;
        color: #94a3b8;
        margin-top: 6px;
        padding-top: 6px;
        border-top: 1px solid #f1f5f9;
    }

    /* Vertical connector lines */
    .cv-line-v {
        width: 2px;
        height: 20px;
        background-color: var(--cv-line-color);
        margin: 0 auto;
    }

    /* Horizontal connector lines */
    .cv-line-h-left {
        border-top: 2px solid var(--cv-line-color);
        width: 50%;
    }
    
    .cv-line-h-right {
        border-top: 2px solid var(--cv-line-color);
        width: 50%;
    }

    .cv-line-h-full {
        border-top: 2px solid var(--cv-line-color);
    }

    /* Remove horizontal lines from edges */
    .cv-edge-left { border-top: none !important; }
    .cv-edge-right { border-top: none !important; }
</style>
`;

const ConceptVisualizer = (function() {

    function renderBadges(node) {
        if (!node.related_concepts || node.related_concepts.length === 0) return '';
        return `<span class="meta-tag">🔗 ${node.related_concepts.length}</span>`;
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
            return `<li><span class="node-leaf">📄 ${node.name} ${badges}</span></li>`;
        }
    }

    // --- MODE 2: GRAPH RECURSION ---
    function buildGraphHTML(node) {
        const hasChildren = node.children && node.children.length > 0;
        const problemCount = node.problems ? node.problems.length : 0;
        
        const cardHTML = `
            <div class="cv-node-card">
                <span class="cv-node-title">${node.name}</span>
                ${problemCount > 0 ? `<div class="cv-node-problems">${problemCount} Problems</div>` : ''}
            </div>
        `;

        if (!hasChildren) {
            return `<table><tr><td>${cardHTML}</td></tr></table>`;
        }

        const childCount = node.children.length;
        
        // Horizontal Connector Row Logic
        // We create 2 cells per child to allow the vertical line to drop from the center
        let connectorRow = '';
        node.children.forEach((_, index) => {
            const isFirst = index === 0;
            const isLast = index === childCount - 1;

            connectorRow += `
                <td class="cv-line-h-right ${isFirst ? 'cv-edge-left' : 'cv-line-h-full'}"></td>
                <td class="cv-line-h-left ${isLast ? 'cv-edge-right' : 'cv-line-h-full'}"></td>
            `;
        });

        // Vertical Line Row Logic
        let verticalLineRow = '';
        node.children.forEach(() => {
            verticalLineRow += `<td colspan="2"><div class="cv-line-v"></div></td>`;
        });

        // Children Row Logic
        let childrenRow = '';
        node.children.forEach(child => {
            childrenRow += `<td colspan="2">${buildGraphHTML(child)}</td>`;
        });

        return `
            <table>
                <tr>
                    <td colspan="${childCount * 2}">
                        ${cardHTML}
                    </td>
                </tr>
                <tr>
                    <td colspan="${childCount * 2}"><div class="cv-line-v"></div></td>
                </tr>
                <tr>
                    ${childCount > 1 ? connectorRow : `<td colspan="2"></td>`}
                </tr>
                <tr>
                    ${verticalLineRow}
                </tr>
                <tr>
                    ${childrenRow}
                </tr>
            </table>
        `;
    }

    return {
        render: function(data, element, mode = 'directory') {
            if (!element) return;
            const rootNode = data.root ? data.root : data;
            let contentHTML = '';
            
            if (mode === 'directory') {
                contentHTML = `<div class="cv-directory"><ul>${buildDirectoryHTML(rootNode)}</ul></div>`;
            } else {
                contentHTML = `<div class="cv-graph">${buildGraphHTML(rootNode)}</div>`;
            }

            element.innerHTML = CSS_STYLES + `<div class="cv-container">${contentHTML}</div>`;
        }
    };
})();

export default ConceptVisualizer;