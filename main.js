var Quotes = function(author, quote){
    this.author = author;
    this.quote = quote;
};
var quotesConstructor = function(quoteList){
    var quotes = quoteList.map(function(quote){
        var $listAuthor = $('<h3>')
            .text(quote.author);
        var $listQuote = $('<div>')
            .text('"' + quote.quote + '"');
        var $listQuoteAuthor = $('<span>')
            .addClass('author')
            .text('  -' + quote.author);
        $listQuote = $listQuote.append($listQuoteAuthor);
        console.log($listQuote);

        $('#accordion').append($listAuthor).append($listQuote);
    });
    return quotes;
};

$(document).on('ready', function() {
    var allQuotes = [];
    $('#accordion').accordion();

    $('.add-content').click(function(){

        $('.popup').modal('show');

        $('.post-content').click(function(e){
            e.preventDefault();
            $('#accordion').empty();
            var author = $('#newQuoteAuthor').val();
            var quoteText = $('#newQuote').val();
            var quote = new Quotes(author, quoteText);  
            allQuotes.push(quote);
            quotesConstructor(allQuotes);
            $('#accordion').accordion('destroy').accordion();
            $('.popup').modal('hide');
            $('#newQuoteAuthor').val('');
            $('#newQuote').val('');
        });
    });

});