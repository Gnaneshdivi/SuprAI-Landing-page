// SuprAI brand lockup — radar mark (navy arcs + 4 orange dots) + wordmark.
// Colours are driven by CSS vars (--logo-ink / --logo-accent) so it can flip
// to white on the dark footer.
export default function Logo() {
  return (
    <span className="brandlogo" aria-label="SuprAI">
      <svg className="brandmark" viewBox="0 0 746 739" fill="none" aria-hidden="true">
        <circle cx="372.58" cy="304.99" r="47.36" />
        <circle cx="372.58" cy="440.22" r="47.36" />
        <circle cx="301.58" cy="372.99" r="47.36" />
        <circle cx="443.07" cy="372.99" r="47.36" />
        <path d="M534.46 279.003C586.047 340.553 586.034 402.104 534.422 463.655" />
        <path d="M210.634 463.968C159.046 402.417 159.06 340.864 210.674 279.313" />
        <path d="M280.676 208.92C342.764 157.779 404.855 157.792 466.944 208.96" />
        <path d="M464.168 529.154C402.077 580.295 339.989 580.284 277.9 529.117" />
        <path d="M589.517 221.062C668.525 319.598 669.245 418.704 591.674 518.378" />
        <path d="M155.575 521.913C76.5679 423.376 75.8509 324.271 153.419 224.6" />
        <path d="M222.23 154.339C321.628 76.019 421.599 75.3055 522.142 152.201" />
        <path d="M522.613 583.741C423.216 662.064 323.244 662.778 222.702 585.882" />
        <path d="M648.129 167.038C760.923 302.013 761.426 437.405 649.636 573.22" />
        <path d="M96.9727 575.932C-15.8211 440.959 -16.3243 305.565 95.4629 169.752" />
        <path d="M167.74 96.2385C303.892 -15.5783 440.469 -16.0772 577.471 94.7418" />
        <path d="M577.112 641.841C440.959 753.658 304.382 754.154 167.38 643.335" />
      </svg>
      <span className="brandword">Supr<span className="ai">AI</span></span>
    </span>
  )
}
