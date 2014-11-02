/**
 * Sorting in Javascript for hungarian characters. This plug-in will replace the special
 * hungarian letters (non english characters).
 *
 *  
 *  @name Hungarian
 *  @summary Sort hungarian characters
 *  @author [David Havas]
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
		var special_letters = { 'á':'az', 'é':'ez', 'í':'iz', 'ó':'oz', 'ö':'ozz', 'ő':'ozz', 'ú':'uz', 'ü':'uzz', 'ű':'uzz', 'cs':'cz', 'zs':'zz', 
   'ccs':'czcz', 'ggy':'gzgz', 'lly':'lzlz', 'nny':'nznz', 'ssz':'szsz', 'tty':'tztz', 'zzs':'zzzz', 'Á':'az', 'É':'ez', 'Í':'iz', 
   'Ó':'oz', 'Ö':'ozz', 'Ő':'ozz', 'Ú':'uz', 'Ü':'uzz', 'Ű':'uzz', 'Cs':'cz', 'Zz':'zz', 'Ccs':'czcz', 'Ggy':'gzgz', 'Lly':'lzlz', 
   'Nny':'nznz', 'Ssz':'szsz', 'Tty':'tztz', 'Zzs':'zzzz'};
        for (var val in special_letters)
           a = a.split(val).join(special_letters[val]);
        a = a.toLowerCase();
        return a;
	},

	"hungarian-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"hungarian-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}   
} );
