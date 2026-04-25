const NAV_TREE = [
  {
    title: "Metode Numerik",
    content: "/pages/metnum/overview.html",
    children: [

      /* =========================================================
         BAB 1
         ========================================================= */
      {
        title: "Error & Angka Penting",
        content: "/pages/metnum/bab1.html",
        children: [
          {
            title: "Angka Penting",
            content: "/pages/metnum/bab1.html#angka-penting"
          },
          {
            title: "Error (Galat)",
            content: "/pages/metnum/bab1.html#error",
            children: [
              {
                title: "Error Absolut",
                content: "/pages/metnum/bab1/error-absolut.html"
              },
              {
                title: "Error Relatif",
                content: "/pages/metnum/bab1/error-relatif.html"
              },
              {
                title: "Error Aproksimasi Iteratif",
                content: "/pages/metnum/bab1/error-iteratif.html"
              }
            ]
          }
        ]
      },

      /* =========================================================
         BAB 2
         ========================================================= */
      {
        title: "Akar Persamaan Non-Linear",
        content: "/pages/metnum/bab2.html",
        children: [
          {
            title: "Metode Pengurung",
            content: "/pages/metnum/bab2/pengurung.html",
            children: [
              {
                title: "Metode Biseksi",
                content: "/pages/metnum/bab2/biseksi.html"
              },
              {
                title: "Regula Falsi",
                content: "/pages/metnum/bab2/regulafalsi.html"
              }
            ]
          },
          {
            title: "Metode Terbuka",
            content: "/pages/metnum/bab2/terbuka.html",
            children: [
              {
                title: "Iterasi Titik Tetap",
                content: "/pages/metnum/bab2/iterasi.html"
              },
              {
                title: "Newton-Raphson",
                content: "/pages/metnum/bab2/newton.html"
              },
              {
                title: "Secant",
                content: "/pages/metnum/bab2/secant.html"
              }
            ]
          }
        ]
      },

      /* =========================================================
         BAB 3
         ========================================================= */
      {
        title: "Sistem Persamaan Linear",
        content: "/pages/metnum/bab3.html",
        children: [
          {
            title: "Dekomposisi LU",
            content: "/pages/metnum/bab3/lu.html"
          },
          {
            title: "Metode Jacobi",
            content: "/pages/metnum/bab3/jacobi.html"
          },
          {
            title: "Gauss-Seidel",
            content: "/pages/metnum/bab3/gauss-seidel.html"
          }
        ]
      },

      /* =========================================================
         BAB 4 (INI YANG KAMU BELUM ADA)
         ========================================================= */
      {
        title: "Sistem Persamaan Non-Linear",
        content: "/pages/metnum/bab4.html",
        children: [
          {
            title: "Newton-Raphson (Multivariable)",
            content: "/pages/metnum/bab4/newton.html"
          },
          {
            title: "Metode Iterasi",
            content: "/pages/metnum/bab4/iterasi.html"
          }
        ]
      },

      /* =========================================================
         BAB 5
         ========================================================= */
      {
        title: "Interpolasi Numerik",
        content: "/pages/metnum/bab5.html",
        children: [
          {
            title: "Beda Hingga",
            content: "/pages/metnum/bab5/beda-hingga.html"
          },
          {
            title: "Newton-Gregory",
            content: "/pages/metnum/bab5/newton-gregory.html"
          },
          {
            title: "Interpolasi Lagrange",
            content: "/pages/metnum/bab5/lagrange.html"
          }
        ]
      },

      /* =========================================================
         BAB 6
         ========================================================= */
      {
        title: "Diferensiasi Numerik",
        content: "/pages/metnum/bab6.html",
        children: [
          {
            title: "Turunan Pertama",
            content: "/pages/metnum/bab6/turunan-pertama.html"
          },
          {
            title: "Turunan Kedua & Lebih Tinggi",
            content: "/pages/metnum/bab6/turunan-lanjut.html"
          }
        ]
      }

    ]
  }
];