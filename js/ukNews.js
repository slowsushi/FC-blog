     $.ajax({

      url: "http://content.guardianapis.com/search?q=uk+news&show-fields=trailText",

      dataType: "jsonp",

      success: function(data) {
        $.each(data.response.results, function () {
                 $( "p ul").append('<li> this['webTitle'] +'</a><p>' + this['fields'].trailText + '</p></li>');
        });

      }});
  });