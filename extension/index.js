'use strict';

module.exports = function (nodecg) {
	// Initialize replicants.
	nodecg.Replicant('scores', {
		defaultValue: {
			red: {
				score: 0,
				tag: 'RED'
			},
			blu: {
				score: 0,
				tag: 'BLU'
			}
		}
	});

	nodecg.Replicant('showHashtag', {defaultValue: true});



	try {
		require('./twitter')(nodecg);
	} catch (e) {
		nodecg.log.error('Failed to load "twitter" lib:', e.stack);
		process.exit(1);
	}

};
