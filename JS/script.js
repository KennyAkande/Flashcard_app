$(document).ready(function () {
    $('.flashcard').click(function () {
        $('.flashcard').removeClass('is-flipped')
    })
    $('.view1').click(function () {
        $('.view1').toggleClass('is-flipped')
    })

    // $('.view2').click(function () {
    //     $('.view2').toggleClass('is-flipped')
    //  })
    // $('.view3').click(function () {
    //     $('.view3').toggleClass('is-flipped')
       
    // })
    // $('.view4').click(function () {
    //     $('.view4').toggleClass('is-flipped')
       
    // })
    // $('.view5').click(function () {
    //     $('.view5').toggleClass('is-flipped')
       
    // })
    // $('.view6').click(function () {
    //     $('.view6').toggleClass('is-flipped')
       
    // })
    // $('.view7').click(function () {
    //     $('.view7').toggleClass('is-flipped')
       
    // })
    // $('.view8').click(function () {
    //     $('.view8').toggleClass('is-flipped')
       
    // })
    // $('.view9').click(function () {
    //     $('.view9').toggleClass('is-flipped')

    // })
    // $('.view10').click(function () {
    //     $('.view10').toggleClass('is-flipped')
       
    // })
    // $('.view11').click(function () {
    //     $('.view11').toggleClass('is-flipped')
       
    // })
    // $('.view12').click(function () {
    //     $('.view12').toggleClass('is-flipped')
       
    // })










    // const flashcards = [
    //     {
    //         question: 'What is the capital of France?',
    //         answer: 'Paris'
    //     },
    //     {
    //         question: 'What is 2 + 2?',
    //         answer: '4'

    //     },
    //     {
    //         question: 'What is the capital of Togo?',
    //         answer: 'Lomé'
    //     }
    // ];

    //  let currentCard = 0;

    // const flashcardElement = $('#flashcard');
    // const questionElement = $('#question');
    // const answerElement = $('#answer');

    // function displayCard() {
    //     questionElement.text(flashcards[currentCard].question)  
    //     answerElement.text(flashcards[currentCard].answer) = 
    //     flashcardElement.removeClass('is-flipped');
    // }

    // $('#flip-card').click(function(){
    //     flashcardElement.toggle('is-flipped');
    // });

    // $('#next-card').click(function(){
    //     currentCard = (currentCard + 1) % flashcards.length;
    //     displayCard();
    // });

    // displayCard();
});
