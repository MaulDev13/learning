const NAV_TREE = [
  {
    title: "Metode Numerik",
    children: [

      // =========================
      // BAB 1
      // =========================
      {
        title: "Bab 1: Pengantar & Analisis Galat",
        children: [

          {
            title: "Konsep Dasar Metode Numerik",
            content: "/pages/subject/metode-numerik/bab-1/konsep-dasar-metode-numerik.html"
          },

          {
            title: "Angka Penting",
            children: [
              {
                title: "Definisi Angka Penting",
                content: "/pages/subject/metode-numerik/bab-1/angka-penting/definisi.html"
              },
              {
                title: "Aturan Penulisan Angka Penting",
                content: "/pages/subject/metode-numerik/bab-1/angka-penting/aturan.html"
              }
            ]
          },

          {
            title: "Jenis-Jenis Galat",
            children: [
              {
                title: "Galat Absolut",
                content: "/pages/subject/metode-numerik/bab-1/jenis-galat/absolut.html"
              },
              {
                title: "Galat Relatif",
                content: "/pages/subject/metode-numerik/bab-1/jenis-galat/relatif.html"
              },
              {
                title: "Galat Persen",
                content: "/pages/subject/metode-numerik/bab-1/jenis-galat/persen.html"
              }
            ]
          },

          {
            title: "Galat Aproksimasi",
            children: [
              {
                title: "Galat Relatif Aproksimasi",
                content: "/pages/subject/metode-numerik/bab-1/galat-aproksimasi/relatif-aproksimasi.html"
              },
              {
                title: "Kriteria Berhenti (Toleransi Error)",
                content: "/pages/subject/metode-numerik/bab-1/galat-aproksimasi/toleransi-error.html"
              }
            ]
          }

        ]
      },

      // =========================
      // BAB 2
      // =========================
      {
        title: "Bab 2: Akar Persamaan Non-Linear",
        children: [

          {
            title: "Konsep Dasar Akar Persamaan",
            content: "/pages/subject/metode-numerik/bab-2/konsep-dasar-akar.html"
          },

          {
            title: "Metode Tertutup (Bracketing)",
            children: [
              {
                title: "Metode Biseksi",
                content: "/pages/subject/metode-numerik/bab-2/bracketing/biseksi.html"
              },
              {
                title: "Metode Regula Falsi",
                content: "/pages/subject/metode-numerik/bab-2/bracketing/regula-falsi.html"
              }
            ]
          },

          {
            title: "Metode Terbuka",
            children: [
              {
                title: "Iterasi Titik Tetap",
                content: "/pages/subject/metode-numerik/bab-2/terbuka/titik-tetap.html"
              },
              {
                title: "Newton-Raphson",
                content: "/pages/subject/metode-numerik/bab-2/terbuka/newton-raphson.html"
              },
              {
                title: "Metode Secant",
                content: "/pages/subject/metode-numerik/bab-2/terbuka/secant.html"
              }
            ]
          },

          {
            title: "Analisis Konvergensi",
            content: "/pages/subject/metode-numerik/bab-2/analisis-konvergensi.html"
          }

        ]
      },

      // =========================
      // BAB 3
      // =========================
      {
        title: "Bab 3: Sistem Persamaan Linear",
        children: [

          {
            title: "Representasi Matriks",
            content: "/pages/subject/metode-numerik/bab-3/representasi-matriks.html"
          },

          {
            title: "Metode Langsung",
            children: [
              {
                title: "Eliminasi Gauss",
                content: "/pages/subject/metode-numerik/bab-3/langsung/gauss.html"
              },
              {
                title: "Eliminasi Gauss-Jordan",
                content: "/pages/subject/metode-numerik/bab-3/langsung/gauss-jordan.html"
              },
              {
                title: "Dekomposisi LU",
                content: "/pages/subject/metode-numerik/bab-3/langsung/lu.html"
              }
            ]
          },

          {
            title: "Metode Iteratif",
            children: [
              {
                title: "Metode Jacobi",
                content: "/pages/subject/metode-numerik/bab-3/iteratif/jacobi.html"
              },
              {
                title: "Metode Gauss-Seidel",
                content: "/pages/subject/metode-numerik/bab-3/iteratif/gauss-seidel.html"
              }
            ]
          },

          {
            title: "Analisis Konvergensi",
            content: "/pages/subject/metode-numerik/bab-3/analisis-konvergensi.html"
          }

        ]
      },

      {
        title: "Sistem Persamaan Non-Linear (Opsional)",
        children: [
          {
            title: "Konsep Dasar SPNL",
            content: "/pages/subject/metode-numerik/advanced/spnl/konsep.html"
          },
          {
            title: "Metode Newton Multivariabel",
            content: "/pages/subject/metode-numerik/advanced/spnl/newton-multivariable.html"
          },
          {
            title: "Metode Iterasi Titik Tetap (Vektor)",
            content: "/pages/subject/metode-numerik/advanced/spnl/fixed-point.html"
          }
        ]
      },

      // =========================
      // BAB 4
      // =========================
      {
        title: "Bab 4: Interpolasi Numerik",
        children: [

          {
            title: "Konsep Dasar Interpolasi",
            content: "/pages/subject/metode-numerik/bab-4/konsep-dasar.html"
          },

          {
            title: "Interpolasi Linear",
            content: "/pages/subject/metode-numerik/bab-4/linear.html"
          },

          {
            title: "Interpolasi Polinomial",
            children: [
              {
                title: "Metode Lagrange",
                content: "/pages/subject/metode-numerik/bab-4/polinomial/lagrange.html"
              },
              {
                title: "Metode Newton (Beda Terbagi)",
                content: "/pages/subject/metode-numerik/bab-4/polinomial/newton.html"
              }
            ]
          }

        ]
      },

      // =========================
      // BAB 5
      // =========================
      {
        title: "Bab 5: Integrasi & Diferensiasi Numerik",
        children: [

          {
            title: "Integrasi Numerik",
            children: [
              {
                title: "Aturan Trapezoid",
                content: "/pages/subject/metode-numerik/bab-5/integrasi/trapezoid.html"
              },
              {
                title: "Aturan Simpson 1/3",
                content: "/pages/subject/metode-numerik/bab-5/integrasi/simpson-1-3.html"
              },
              {
                title: "Aturan Simpson 3/8",
                content: "/pages/subject/metode-numerik/bab-5/integrasi/simpson-3-8.html"
              }
            ]
          },

          {
            title: "Diferensiasi Numerik",
            children: [
              {
                title: "Beda Maju",
                content: "/pages/subject/metode-numerik/bab-5/diferensiasi/maju.html"
              },
              {
                title: "Beda Mundur",
                content: "/pages/subject/metode-numerik/bab-5/diferensiasi/mundur.html"
              },
              {
                title: "Beda Pusat",
                content: "/pages/subject/metode-numerik/bab-5/diferensiasi/pusat.html"
              }
            ]
          }

        ]
      },

      // =========================
      // BAB 6
      // =========================
      {
        title: "Bab 6: Persamaan Diferensial Biasa",
        children: [

          {
            title: "Konsep Dasar PDB",
            content: "/pages/subject/metode-numerik/bab-6/konsep-dasar.html"
          },

          {
            title: "Metode Numerik PDB",
            children: [
              {
                title: "Metode Euler",
                content: "/pages/subject/metode-numerik/bab-6/euler.html"
              },
              {
                title: "Runge-Kutta Orde 2",
                content: "/pages/subject/metode-numerik/bab-6/rk2.html"
              },
              {
                title: "Runge-Kutta Orde 4",
                content: "/pages/subject/metode-numerik/bab-6/rk4.html"
              }
            ]
          }

        ]
      },

      // =========================
      // BAB 7
      // =========================
      {
        title: "Bab 7: Implementasi Python",
        children: [

          {
            title: "Dasar Python untuk Numerik",
            content: "/pages/subject/metode-numerik/bab-7/dasar-python.html"
          },

          {
            title: "Implementasi Metode Akar",
            content: "/pages/subject/metode-numerik/bab-7/metode-akar.html"
          },

          {
            title: "Implementasi SPL",
            content: "/pages/subject/metode-numerik/bab-7/spl.html"
          },

          {
            title: "Implementasi Interpolasi",
            content: "/pages/subject/metode-numerik/bab-7/interpolasi.html"
          },

          {
            title: "Implementasi Integrasi & Diferensiasi",
            content: "/pages/subject/metode-numerik/bab-7/integrasi-diferensiasi.html"
          },

          {
            title: "Implementasi PDB",
            content: "/pages/subject/metode-numerik/bab-7/pdb.html"
          }

        ]
      },

      // =========================
      // BAB 8
      // =========================
      {
        title: "Bab 8: Proyek Metode Numerik",
        children: [

          {
            title: "Studi Kasus",
            content: "/pages/subject/metode-numerik/bab-8/studi-kasus.html"
          },

          {
            title: "Perancangan Solusi",
            content: "/pages/subject/metode-numerik/bab-8/perancangan.html"
          },

          {
            title: "Implementasi",
            content: "/pages/subject/metode-numerik/bab-8/implementasi.html"
          },

          {
            title: "Analisis Hasil",
            content: "/pages/subject/metode-numerik/bab-8/analisis.html"
          },

          {
            title: "Pelaporan & Presentasi",
            content: "/pages/subject/metode-numerik/bab-8/presentasi.html"
          }

        ]
      }

    ]
  }
];

export default NAV_TREE;