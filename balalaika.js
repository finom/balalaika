"use strict";
(function( window, document, arr, s_prototype, s_length, s_EventListener, s_call, s_forEach, s_push, s_apply ) { // http://jsbin.com/eqiCAKO/2
	var slice = function( a, i ) {
		return arr.slice[s_call]( a, i );
	},
	extend = function( obj ) {
		var args = arguments;
		for( i = 1; i < args[ s_length ]; i++ ) {
			var arg = args[ i ];
			if ( arg ) for ( i in arg ) {
				obj[ prop ] = arg[ prop ];
			}
		}
	},
	nsReg = /\.(.+)?/,
	expando = 'b' + Math.random(),
	id = 0,
	events = {},
	i,
	$ = window.$ = function( s ) {
		return new $[ s_prototype ].init( s );
	},
	fn = $.fn = $[ s_prototype ] = arr;
	fn.init = function( s ) {
		arr[s_push][s_apply](this, s && s.nodeType ? [s] : "" + s === s ? slice(document.querySelectorAll(s)) : /^f/.test(typeof s) ? $(document).r(s) : null);
	};
	fn.init[ s_prototype ] = fn;
	extend( $, {
		extend: extend
	});
	extend( fn, {
		extend: function() {
			var args = slice( arguments );
			args.unshift( this );
			return extend[s_apply]( 0, args );
		},
		each: arr[ s_forEach ],
		add: function( s ) {
			var _this = this;
			s = $( s );
			arr[s_push][s_apply]( _this, s );
			for( i = _this[s_length] - s[s_length]; i < _this[s_length]; i++ ) {
				if( _this.indexOf( _this[ i ] ) !== i ) {
					_this.splice( i--, 1 );
				}
			}
			return _this;
		},
		on: function( n,f ) {
			var n = n.split( nsReg ),
				evtName = n[ 0 ];
	
			return this[ s_forEach ]( function( item ) {
				var _id = item[ expando ] = item[ expando ] || ++id,
					eventObject = events[ _id ] = events[ _id ] || {},
					eventArray = eventObject[ evtName ] = eventObject[ evtName ] || [];
					
				eventArray[s_push]({
					handler: f,
					namespace: n[ 1 ],
					type: evtName
				});
				
				item[ 'add' + s_EventListener ]( n, f );
			});
		},
		off: function( n, f ) {
			n = n.split( nsReg );
			var evtName = n[ 0 ],
				ns = n[ 1 ];
			this[ s_forEach ]( function( item ) {
				var _id = item[ expando ],
					eventArray;
				if( ns || f ) {
					for( eventArray = events[ _id ] && events[ _id ][ evtName ], i = 0; eventArray && i < eventArray[ s_length ]; i++ ) {
						if( ( !f || f === eventArray[ i ].handler ) && ( !ns || ns === eventArray[ i ].namespace ) ) {
							item[ 'remove' + s_EventListener ]( evtName, eventArray[ i ].handler );
							eventArray.splice( i--, 1 );
						}
					}
				} else {
					item[ 'remove' + s_EventListener ]( evtName, f );
				}
			});
		},

		r: function (f) {
			/c/.test(document.readyState) ? f() : $(document).on('DOMContentLoaded', f);
			return this;
		}
	});
})( this, document, 'prototype', 'length', 'EventListener', 'call', 'forEach', 'push', 'apply' );