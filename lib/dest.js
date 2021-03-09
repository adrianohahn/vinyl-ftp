module.exports = dest;

function dest( folder, options, mode ) {

	options = this.makeOptions( options );
	var self = this;

	var stream = this.parallel( function ( file, cb ) {

		var path = self.join( '/', folder, file.relative );
		self.upload( file, path, cb, mode);

	}, options );

	stream.resume();
	return stream;

}
