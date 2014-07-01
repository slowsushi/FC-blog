     $.ajax({

      url: "http://content.guardianapis.com/search?q=uk+news&show-fields=trailText",

      dataType: "jsonp",

      success: function(data) {
        $.each(data.response.results, function () {
                 $( "#tab1").append('<li> this['webTitle'] +'</a><p>' + this['fields'].trailText + '</p></li>');
        });

      }});
  });
