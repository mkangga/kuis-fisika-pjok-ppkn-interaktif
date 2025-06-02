// Quiz Application JavaScript

class QuizApp {
    constructor() {
        this.currentSubject = '';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isAnswerChecked = false;
        
        this.initializeQuestions();
        this.bindEvents();
        this.showScreen('homeScreen');
    }

    initializeQuestions() {
        this.questions = {
            pjok: [
                {
                    question: "Siapakah yang menciptakan permainan bola basket?",
                    options: ["William G. Morgan", "James Naismith", "Dr. Luther", "Wilt Chamberlain", "Carmelo Anthony"],
                    correct: 1,
                    explanation: "James Naismith adalah penemu permainan bola basket pada tahun 1891"
                },
                {
                    question: "Berapa jumlah pemain dalam satu tim bola basket?",
                    options: ["4 orang", "5 orang", "6 orang", "7 orang", "8 orang"],
                    correct: 1,
                    explanation: "Dalam permainan bola basket, setiap tim terdiri dari 5 orang pemain inti di lapangan"
                },
                {
                    question: "Istilah untuk teknik menggiring bola dalam permainan bola basket adalah...",
                    options: ["Passing", "Dribbling", "Shooting", "Pivot", "Rebound"],
                    correct: 1,
                    explanation: "Dribbling adalah teknik menggiring bola basket dengan cara memantulkan bola ke lantai secara berulang-ulang"
                },
                {
                    question: "Berapa jumlah pemain dalam satu tim sepak bola?",
                    options: ["9 orang", "10 orang", "11 orang", "12 orang", "13 orang"],
                    correct: 2,
                    explanation: "Dalam permainan sepak bola, setiap tim terdiri dari 11 orang pemain termasuk penjaga gawang"
                },
                {
                    question: "Teknik mengoper bola dalam permainan sepak bola disebut...",
                    options: ["Passing", "Dribbling", "Shooting", "Heading", "Tackling"],
                    correct: 0,
                    explanation: "Passing adalah teknik mengoper bola kepada teman satu tim dalam permainan sepak bola"
                },
                {
                    question: "Berapa lama waktu pertandingan dalam permainan sepak bola?",
                    options: ["2 x 30 menit", "2 x 35 menit", "2 x 40 menit", "2 x 45 menit", "2 x 50 menit"],
                    correct: 3,
                    explanation: "Dalam pertandingan sepak bola standar, waktu pertandingan adalah 2 x 45 menit"
                },
                {
                    question: "Induk organisasi sepak bola internasional adalah...",
                    options: ["FIBA", "UEFA", "FIFA", "PSSI", "AFC"],
                    correct: 2,
                    explanation: "FIFA adalah induk organisasi sepak bola internasional"
                },
                {
                    question: "Teknik mengontrol bola dalam sepak bola disebut...",
                    options: ["Passing", "Dribbling", "Shooting", "Trapping", "Tackling"],
                    correct: 3,
                    explanation: "Trapping adalah teknik mengontrol atau menghentikan bola dalam permainan sepak bola"
                },
                {
                    question: "Teknik menyundul bola dalam sepak bola disebut...",
                    options: ["Passing", "Dribbling", "Shooting", "Heading", "Tackling"],
                    correct: 3,
                    explanation: "Heading adalah teknik menyundul bola menggunakan kepala dalam permainan sepak bola"
                },
                {
                    question: "Berapa tinggi ring basket dari permukaan lantai?",
                    options: ["2,45 meter", "2,75 meter", "3,05 meter", "3,25 meter", "3,50 meter"],
                    correct: 2,
                    explanation: "Tinggi ring basket dari permukaan lantai adalah 3,05 meter atau 10 kaki"
                }
            ],
            pancasila: [
                {
                    question: "Pancasila adalah dasar negara Indonesia yang terdiri dari berapa sila?",
                    options: ["3 sila", "4 sila", "5 sila", "6 sila", "7 sila"],
                    correct: 2,
                    explanation: "Pancasila terdiri dari 5 sila yang menjadi dasar negara dan ideologi bangsa Indonesia"
                },
                {
                    question: "Nilai yang terkandung dalam sila pertama Pancasila adalah...",
                    options: ["Nilai Kemanusiaan", "Nilai Persatuan", "Nilai Kerakyatan", "Nilai Ketuhanan", "Nilai Keadilan"],
                    correct: 3,
                    explanation: "Sila pertama mengandung nilai Ketuhanan yang menegaskan bahwa bangsa Indonesia adalah bangsa yang religius"
                },
                {
                    question: "Berikut ini yang merupakan penerapan sila kedua Pancasila adalah...",
                    options: ["Melaksanakan ibadah sesuai agama masing-masing", "Mengakui keberagaman suku di Indonesia", "Menghormati hak asasi manusia", "Musyawarah untuk mencapai mufakat", "Melaksanakan hak dan kewajiban"],
                    correct: 2,
                    explanation: "Sila kedua menekankan pada penghormatan terhadap harkat dan martabat manusia, termasuk penghormatan terhadap hak asasi manusia"
                },
                {
                    question: "Nilai persatuan dalam Pancasila terletak pada sila ke-",
                    options: ["1", "2", "3", "4", "5"],
                    correct: 2,
                    explanation: "Nilai persatuan terdapat pada sila ketiga Pancasila yaitu 'Persatuan Indonesia'"
                },
                {
                    question: "Sila keempat Pancasila berbunyi...",
                    options: ["Ketuhanan Yang Maha Esa", "Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan", "Keadilan sosial bagi seluruh rakyat Indonesia"],
                    correct: 3,
                    explanation: "Sila keempat Pancasila berbunyi 'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan'"
                },
                {
                    question: "Berikut ini yang merupakan penerapan nilai ketuhanan dalam kehidupan sehari-hari adalah...",
                    options: ["Menghormati perbedaan pendapat", "Mengutamakan kepentingan bersama", "Beribadah sesuai dengan agama masing-masing", "Berpartisipasi dalam pemilihan umum", "Berperilaku adil terhadap sesama"],
                    correct: 2,
                    explanation: "Beribadah sesuai dengan agama masing-masing merupakan penerapan nilai ketuhanan yang terkandung dalam sila pertama Pancasila"
                },
                {
                    question: "Tokoh yang menyampaikan ide tentang dasar negara dalam sidang BPUPK adalah...",
                    options: ["Mohammad Yamin, Soepomo, dan Soekarno", "Soekarno, Mohammad Hatta, dan Soepomo", "Mohammad Hatta, Ki Hajar Dewantara, dan Soekarno", "Soepomo, Ki Hajar Dewantara, dan Mohammad Yamin", "Soekarno, Mohammad Yamin, dan Ahmad Soebardjo"],
                    correct: 0,
                    explanation: "Tokoh yang menyampaikan ide tentang dasar negara dalam sidang BPUPK adalah Mohammad Yamin, Soepomo, dan Soekarno"
                },
                {
                    question: "Pancasila sebagai dasar negara Indonesia secara yuridis formal tertuang dalam...",
                    options: ["Batang Tubuh UUD 1945", "Pembukaan UUD 1945", "Pancasila", "Dekrit Presiden 5 Juli 1959", "TAP MPR"],
                    correct: 1,
                    explanation: "Pancasila sebagai dasar negara Indonesia secara yuridis formal tertuang dalam Pembukaan UUD 1945"
                },
                {
                    question: "Berikut ini yang BUKAN merupakan nilai yang terkandung dalam Pancasila adalah...",
                    options: ["Nilai Ketuhanan", "Nilai Kemanusiaan", "Nilai Persatuan", "Nilai Kerakyatan", "Nilai Kapitalisme"],
                    correct: 4,
                    explanation: "Nilai Kapitalisme bukan merupakan nilai yang terkandung dalam Pancasila"
                },
                {
                    question: "Berikut ini yang merupakan penerapan sila kelima Pancasila adalah...",
                    options: ["Mengakui persamaan derajat dan hak setiap warga negara", "Menghormati kebebasan beragama", "Cinta tanah air Indonesia", "Menghargai pendapat orang lain", "Bersikap adil terhadap sesama"],
                    correct: 4,
                    explanation: "Bersikap adil terhadap sesama merupakan penerapan sila kelima Pancasila yaitu 'Keadilan sosial bagi seluruh rakyat Indonesia'"
                }
            ],
            fisika: [
                {
                    question: "Apa definisi dari Gerak Lurus Beraturan (GLB)?",
                    options: ["Gerak benda pada lintasan lurus dengan percepatan tetap", "Gerak benda pada lintasan lurus dengan kecepatan tetap", "Gerak benda pada lintasan lurus dengan percepatan berubah-ubah", "Gerak benda pada lintasan lurus dengan kecepatan berubah-ubah", "Gerak benda pada lintasan melingkar dengan kecepatan tetap"],
                    correct: 1,
                    explanation: "Gerak Lurus Beraturan adalah gerak benda pada lintasan lurus dengan kecepatan tetap"
                },
                {
                    question: "Apa definisi dari Gerak Lurus Berubah Beraturan (GLBB)?",
                    options: ["Gerak benda pada lintasan lurus dengan percepatan tetap", "Gerak benda pada lintasan lurus dengan kecepatan tetap", "Gerak benda pada lintasan lurus dengan percepatan berubah-ubah", "Gerak benda pada lintasan lurus dengan kecepatan berubah-ubah", "Gerak benda pada lintasan melingkar dengan kecepatan tetap"],
                    correct: 0,
                    explanation: "Gerak Lurus Berubah Beraturan adalah gerak benda pada lintasan lurus dengan percepatan tetap"
                },
                {
                    question: "Rumus untuk menghitung kecepatan dalam GLB adalah...",
                    options: ["v = s x t", "v = s / t", "v = s + t", "v = s - t", "v = t / s"],
                    correct: 1,
                    explanation: "Rumus untuk menghitung kecepatan dalam GLB adalah v = s / t, dimana v adalah kecepatan, s adalah jarak, dan t adalah waktu"
                },
                {
                    question: "Rumus untuk menghitung jarak dalam GLB adalah...",
                    options: ["s = v x t", "s = v / t", "s = v + t", "s = v - t", "s = t / v"],
                    correct: 0,
                    explanation: "Rumus untuk menghitung jarak dalam GLB adalah s = v x t, dimana s adalah jarak, v adalah kecepatan, dan t adalah waktu"
                },
                {
                    question: "Rumus kecepatan akhir pada GLBB adalah...",
                    options: ["v = v₀ + a.t", "v = v₀ - a.t", "v = v₀ x a.t", "v = v₀ / a.t", "v = v₀ + a/t"],
                    correct: 0,
                    explanation: "Rumus kecepatan akhir pada GLBB adalah v = v₀ + a.t, dimana v adalah kecepatan akhir, v₀ adalah kecepatan awal, a adalah percepatan, dan t adalah waktu"
                },
                {
                    question: "Rumus jarak tempuh pada GLBB adalah...",
                    options: ["s = v₀.t + ½.a.t²", "s = v₀.t - ½.a.t²", "s = v₀.t x ½.a.t²", "s = v₀.t / ½.a.t²", "s = ½.a.t² - v₀.t"],
                    correct: 0,
                    explanation: "Rumus jarak tempuh pada GLBB adalah s = v₀.t + ½.a.t², dimana s adalah jarak tempuh, v₀ adalah kecepatan awal, a adalah percepatan, dan t adalah waktu"
                },
                {
                    question: "Contoh penerapan Gerak Lurus Beraturan (GLB) dalam kehidupan sehari-hari adalah...",
                    options: ["Mobil yang bergerak turun di jalan menurun", "Bola yang dilempar ke atas", "Kereta api yang melaju dengan kecepatan tetap di rel yang lurus", "Buah jatuh dari pohon", "Sepeda yang melaju dari keadaan diam"],
                    correct: 2,
                    explanation: "Kereta api yang melaju dengan kecepatan tetap di rel yang lurus merupakan contoh penerapan Gerak Lurus Beraturan"
                },
                {
                    question: "Contoh penerapan Gerak Lurus Berubah Beraturan (GLBB) dalam kehidupan sehari-hari adalah...",
                    options: ["Kereta api yang melaju dengan kecepatan tetap", "Mobil yang bergerak dengan kecepatan konstan", "Bola yang dilempar ke atas lalu turun kembali", "Orang yang berjalan dengan langkah tetap", "Pesawat yang terbang pada ketinggian konstan"],
                    correct: 2,
                    explanation: "Bola yang dilempar ke atas lalu turun kembali merupakan contoh penerapan GLBB"
                },
                {
                    question: "Sebuah mobil bergerak dengan kecepatan 72 km/jam. Berapa kecepatan mobil tersebut jika dinyatakan dalam m/s?",
                    options: ["15 m/s", "18 m/s", "20 m/s", "22 m/s", "25 m/s"],
                    correct: 2,
                    explanation: "Kecepatan 72 km/jam jika dikonversi ke m/s adalah 72 × (1000/3600) = 20 m/s"
                },
                {
                    question: "Sebuah benda bergerak dengan percepatan tetap 2 m/s². Jika kecepatan awal benda 5 m/s, maka kecepatan benda setelah 3 detik adalah...",
                    options: ["5 m/s", "7 m/s", "9 m/s", "11 m/s", "13 m/s"],
                    correct: 3,
                    explanation: "Kecepatan benda setelah 3 detik dapat dihitung dengan rumus v = v₀ + a.t = 5 + (2 × 3) = 11 m/s"
                }
            ]
        };
    }

    bindEvents() {
        // Subject selection
        document.querySelectorAll('.subject-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const subject = e.currentTarget.dataset.subject;
                this.startQuiz(subject);
            });
        });

        // Navigation buttons
        document.getElementById('backToHome').addEventListener('click', () => {
            this.resetQuiz();
            this.showScreen('homeScreen');
        });

        document.getElementById('checkAnswer').addEventListener('click', () => {
            this.checkAnswer();
        });

        document.getElementById('nextQuestion').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('retryQuiz').addEventListener('click', () => {
            this.retryQuiz();
        });

        document.getElementById('backToMenu').addEventListener('click', () => {
            this.resetQuiz();
            this.showScreen('homeScreen');
        });
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    startQuiz(subject) {
        this.currentSubject = subject;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isAnswerChecked = false;

        const subjectNames = {
            pjok: 'PJOK',
            pancasila: 'Pendidikan Pancasila',
            fisika: 'Fisika'
        };

        document.getElementById('currentSubject').textContent = subjectNames[subject];
        document.getElementById('score').textContent = '0';
        document.getElementById('totalQuestions').textContent = this.questions[subject].length;

        this.showScreen('quizScreen');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.questions[this.currentSubject][this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;
        const totalQuestions = this.questions[this.currentSubject].length;

        // Update progress
        const progress = (questionNumber / totalQuestions) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('currentQuestion').textContent = questionNumber;
        document.getElementById('questionNumber').textContent = questionNumber;

        // Display question
        document.getElementById('questionText').textContent = question.question;

        // Display options
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = index;
            optionElement.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;
            
            optionElement.addEventListener('click', () => {
                this.selectOption(index);
            });

            optionsContainer.appendChild(optionElement);
        });

        // Reset button states
        document.getElementById('checkAnswer').disabled = true;
        document.getElementById('feedbackSection').classList.add('hidden');
        this.isAnswerChecked = false;
    }

    selectOption(index) {
        if (this.isAnswerChecked) return;

        // Remove previous selections
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });

        // Select current option
        document.querySelector(`.option[data-index="${index}"]`).classList.add('selected');
        
        // Enable check button
        document.getElementById('checkAnswer').disabled = false;
        
        // Store user answer
        this.userAnswers[this.currentQuestionIndex] = index;
    }

    checkAnswer() {
        if (this.isAnswerChecked) return;

        const question = this.questions[this.currentSubject][this.currentQuestionIndex];
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;

        // Update score
        if (isCorrect) {
            this.score += 10;
            document.getElementById('score').textContent = this.score;
        }

        // Show correct/incorrect styling
        document.querySelectorAll('.option').forEach((option, index) => {
            if (index === correctAnswer) {
                option.classList.add('correct');
            } else if (index === userAnswer && !isCorrect) {
                option.classList.add('wrong');
            }
        });

        // Show feedback
        const feedbackSection = document.getElementById('feedbackSection');
        const feedbackResult = document.getElementById('feedbackResult');
        const feedbackIcon = document.getElementById('feedbackIcon');
        const feedbackText = document.getElementById('feedbackText');
        const explanation = document.getElementById('explanation');

        feedbackSection.classList.remove('hidden');
        
        if (isCorrect) {
            feedbackResult.className = 'feedback-result correct';
            feedbackIcon.textContent = '✅';
            feedbackText.textContent = 'Benar!';
        } else {
            feedbackResult.className = 'feedback-result wrong';
            feedbackIcon.textContent = '❌';
            feedbackText.textContent = 'Salah!';
        }

        explanation.innerHTML = `
            <strong>Penjelasan:</strong>
            ${question.explanation}
        `;

        // Update next button text
        const nextButton = document.getElementById('nextQuestion');
        if (this.currentQuestionIndex === this.questions[this.currentSubject].length - 1) {
            nextButton.textContent = 'Lihat Hasil';
        } else {
            nextButton.textContent = 'Lanjut ke Soal Berikutnya';
        }

        this.isAnswerChecked = true;
    }

    nextQuestion() {
        if (this.currentQuestionIndex === this.questions[this.currentSubject].length - 1) {
            this.showResults();
        } else {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    showResults() {
        const totalQuestions = this.questions[this.currentSubject].length;
        const correctAnswers = this.score / 10;
        const wrongAnswers = totalQuestions - correctAnswers;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);

        const subjectNames = {
            pjok: 'PJOK',
            pancasila: 'Pendidikan Pancasila',
            fisika: 'Fisika'
        };

        document.getElementById('resultsSubject').textContent = subjectNames[this.currentSubject];
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('correctAnswers').textContent = correctAnswers;
        document.getElementById('wrongAnswers').textContent = wrongAnswers;
        document.getElementById('percentage').textContent = `${percentage}%`;

        // Generate feedback based on score
        let feedback = '';
        if (percentage >= 90) {
            feedback = '🌟 Luar biasa! Kamu sangat memahami materi ini!';
        } else if (percentage >= 80) {
            feedback = '👏 Bagus sekali! Hasil yang sangat memuaskan!';
        } else if (percentage >= 70) {
            feedback = '👍 Baik! Terus tingkatkan pemahaman kamu!';
        } else if (percentage >= 60) {
            feedback = '📚 Cukup baik, masih perlu belajar lebih giat!';
        } else {
            feedback = '💪 Jangan menyerah! Terus belajar dan coba lagi!';
        }

        document.getElementById('resultsFeedback').textContent = feedback;

        this.showScreen('resultsScreen');
    }

    retryQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isAnswerChecked = false;
        
        document.getElementById('score').textContent = '0';
        this.showScreen('quizScreen');
        this.displayQuestion();
    }

    resetQuiz() {
        this.currentSubject = '';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isAnswerChecked = false;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});