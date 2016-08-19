var DnaTranscriber = function() {
};

var transcriptTable = {
	'C': 'G',
	'G': 'C',
	'A': 'U',
	'T': 'A'
};

DnaTranscriber.prototype.toRna = function(sequence) {
	return sequence.split("").map(function(n){
		return n = transcriptTable[n];
	}).join("");
}

module.exports = DnaTranscriber;