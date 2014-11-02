/**
 * Sorting in Javascript for hungarian characters. This plug-in will replace the special
 * hungarian letters (non english characters).
 *
 *  
 *  @name Hungarian
 *  @summary Sort hungarian characters
 *  @author [Dávid Havas]
 *
 *  @example
 *    $('#example').dataTable({
 *       'columnDefs' : [
 *                       {'type' : 'hungarian'}
 *       ]
 *   });
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"hungarian-pre": function ( a ) {
		var special_letters = { "Á": "Aa", "É": "Ea", "Í": "Ia", "Ó": "Oa", "Ö": "Ob", "Ő": "Oc", "Ú": "Ua", "Ü": "Ub",  "Ű": "Uc", "á": "aa", "é": "ea", "í": "ia", "ó": "oa", "ö": "ob", "ő": "oc", "ú": "ua", "ü": "ub",  "ű": "uc"};
        for (var val in special_letters)
           a = a.split(val).join(special_letters[val]);
        return a;
	},

	"hungarian-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"hungarian-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );