var Quotes = (function(){
    var allQuotes = [];

    var Quote = function(author, quote){
        this.author = author;
        this.quote = quote;
    };

    Quote.quoteList = allQuotes;

    Quote.makeQuote = function(auth, text){
        var quote = new Quote(auth, text);
        allQuotes.push(quote);
    };

    Quote.rating = function(rating){
        console.log(rating);
        return Quote.starRating = rating;
    };

    Quote.makeDOM = function(quoteList, location){
        var quotes = quoteList.map(function(quote){
            var $listAuthor = $('<h3>')
                .text(quote.author);
            var $listQuote = $('<div>')
                .text('"' + quote.quote + '"  -');
            var $listQuoteAuthor = $('<span>')
                .addClass('author')
                .text(quote.author);
            var makeStars = _.map([1,2,3,4,5], function(num) {
                return $('<input type="radio" name="rating" value="' + num + '"><i></i>');
            });
            var ratingSys = $('<span>')
                .addClass('star-rating')
                .append(makeStars);
            $listQuote = $listQuote.append($listQuoteAuthor).append(ratingSys);
            $(location).append($listAuthor).append($listQuote);
        });
        return quotes;
    };

    return Quote;
})();

$(document).on('ready', function() {
    
    $('.main-accordion').accordion();
    $('.sorted-accordion').accordion();

    $('.add-content').click(function(){

        $('.popup').modal('show');

        $(document).on('click', '.post-content', function(e){
            e.preventDefault();
            $('.main-accordion').empty();
            Quotes.makeQuote($('#newQuoteAuthor').val(), $('#newQuote').val()); 
            Quotes.makeDOM(Quotes.quoteList, '.main-accordion');
            $('.main-accordion').accordion('destroy').accordion();
            $('.popup').modal('hide');
            $('#newQuoteAuthor').val('');
            $('#newQuote').val('');

            $('input[name="rating"]').click(function() {
                Quotes.rating(this.value);
            });
        });

    });
    
    


    $(document).on('click', '.author', function(){
        $('.sorted-accordion').empty();
        $('.sort-pop').modal('show');
        var authorName = ($(this).text());
        var sortedQuotes = _.filter(Quotes.quoteList, function(val){
            return val.author === authorName;
        });
        Quotes.makeDOM(sortedQuotes, '.sorted-accordion');

        $('.close-sorted-list').click(function(){
            $('.sort-pop').modal('hide');
        });
    });


});