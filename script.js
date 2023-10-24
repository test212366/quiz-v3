const questions = [
	item = {
		id: 0,
		question: '20 + 20?',
		a: '40',
		b: '50',
		c: '60',
		d: '2020',
		currentNum: 'a'
	},
	item = {
		id: 1,
		question: '1 > 0?',
		a: 'no',
		b: 'yes',
		c: 'nina',
		d: 'nina',
		currentNum: 'b'
	},
	item = {
		id: 2,
		question: 'He a man?',
		a: 'no',
		b: 'yes',
		c: 'maybe',
		d: 'const',
		currentNum: 'b'
	},
	item = {
		id: 3,
		question: 'the last question?',
		a: 'no',
		b: 'yes',
		c: 'maybe',
		d: 'const',
		currentNum: 'b'
	},

]
let currentIndexQuestion = 0,
	currentRightQuestion = 0
//desc items
const title = document.getElementById('title'),
	buttonA = document.getElementById('button-a'),
	buttonB = document.getElementById('button-b'),
	buttonC = document.getElementById('button-c'),
	buttonD = document.getElementById('button-d'),
	buttonNext = document.getElementById('next'),
	currentPageQuiz = document.getElementById('current'),
	allPageQuiz = document.getElementById('all'),
	buttonReturn = document.getElementById('return'),
	modal = document.querySelector('.modalWindow'),
	modalOverlay = document.querySelector('.overlay'),
	currentValueQuestions = document.getElementById('currentValue')

window.addEventListener('load', () => {
	allPageQuiz.textContent = questions.length

	buttonA.addEventListener('click', function () {
		checkOnCurrentValue(this.dataset.other)
		nextQuestion()
	})
	buttonB.addEventListener('click', function () {
		checkOnCurrentValue(this.dataset.other)
		nextQuestion()
	})
	buttonC.addEventListener('click', function () {
		checkOnCurrentValue(this.dataset.other)
		nextQuestion()
	})
	buttonD.addEventListener('click', function () {
		checkOnCurrentValue(this.dataset.other)
		nextQuestion()
	})

	function checkOnCurrentValue(value) {
		for (const item of questions) {

			if (currentIndexQuestion === item.id) {
				if (value == item.currentNum) {
					currentRightQuestion++
				}
			}
		}
	}

	function createQuestion(indexQuestion = currentIndexQuestion) {
		currentPageQuiz.textContent = indexQuestion
		for (const item of questions) {
			if (indexQuestion === item.id) {
				[title.textContent, buttonA.textContent, buttonB.textContent, buttonC.textContent, buttonD.textContent] = [item.question, item.a, item.b, item.c, item.d]
			}
		}
		if (indexQuestion >= questions.length) {
			modal.classList.add('active')
			currentValueQuestions.textContent = currentRightQuestion
			buttonReturn.addEventListener('click', () => {
				currentRightQuestion = 0
				modal.classList.remove('active')
				currentIndexQuestion = 0
				createQuestion()
			})
			modalOverlay.addEventListener('click', () => {
				currentRightQuestion = 0
				modal.classList.remove('active')
				currentIndexQuestion = 0
				createQuestion()
			})
		}
	}
	createQuestion()

	function nextQuestion() {
		currentIndexQuestion++
		createQuestion(currentIndexQuestion)
	}

	buttonNext.addEventListener('click', () => {
		nextQuestion()
	})
})