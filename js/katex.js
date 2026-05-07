 /* =========================================================
   KATEX RENDER
========================================================= */

export function renderMath(element = document.body) {

    // safety check
    if (!window.renderMathInElement) return;

    renderMathInElement(element, {

        delimiters: [

            // block KaTeX
            {
                left: "$$",
                right: "$$",
                display: true
            },

            // inline KaTeX ($ ... $)
            {
                left: "$",
                right: "$",
                display: false
            },

            // optional LaTeX style (recommended)
            {
                left: "\\(",
                right: "\\)",
                display: false
            },
            {
                left: "\\[",
                right: "\\]",
                display: true
            }
        ],

        throwOnError: false
    });
}