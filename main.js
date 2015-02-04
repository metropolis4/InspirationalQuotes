var Quotes = function(author, quote){
    this.author = author;
    this.quote = quote;
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

                allQuotes.map(function(quote){
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

            $('#accordion').accordion('destroy').accordion();
            $('.popup').modal('hide');
            $('#newQuoteAuthor').val('');
            $('#newQuote').val('');
        });
    });

});