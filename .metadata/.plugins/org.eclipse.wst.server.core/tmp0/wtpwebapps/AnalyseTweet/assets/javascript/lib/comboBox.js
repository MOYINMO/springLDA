/**
 * Creation d'un combo box
 * @author Anas Neumann <anas.neumann.isamm@gmail.com>
 * @since 21/09/2016
 * @version Uprodit 2.0
 */

  $( function() {
    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<div>" )
          .insertAfter( this.element )
          .addClass( "input-group");
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
 
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
        value = selected.val() ? selected.text() : "";
 
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left form-control comboBoxInput")
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
          .tooltip({
            classes: {
              "ui-tooltip": "ui-state-highlight"
            }
          });
 
        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
          autocompletechange: "_changeValueInput"
        });
      },
      
      _createShowAllButton: function() {
          var input = this.input,
            wasOpen = false;
   
          var btnLeft = $( "<span>" )
            .attr( "title", "Show All Items" )
            .prependTo( this.wrapper )
            .removeClass( "ui-corner-all" )
            .addClass( "input-group-addon comboShowAllBtn" )
            .on( "mousedown", function() {
              wasOpen = input.autocomplete( "widget" ).is( ":visible" );
            })
            .on( "click", function() {
              input.trigger( "focus" );
              if ( wasOpen ) {
                return;
              }
              input.autocomplete( "search", "" );
            });
          $( "<i>" )
          	.prependTo(btnLeft)
          	.addClass( "fa fa fa-chevron-down" )
        },

      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 
      _changeValueInput: function( event, ui ) {
        if ( ui.item ) {
          return;
        }
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
        if ( valid ) {
          return;
        } else {       	
        	$( "<option>" )
        	.attr("value", this.input.val())
        	.text(this.input.val())
          	.appendTo(this.element);
        	this.element.val(this.input.val());
        }
      },

      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });

  });