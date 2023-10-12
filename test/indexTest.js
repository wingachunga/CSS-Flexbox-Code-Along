require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe('styling', function() {

  context('within index.html', function() {

    it('contains a <link> tag', function() {
      const link = document.querySelector('link');
      expect(link).to.not.be.null, "No <link> tag was found";
    });

    it('correctly links to the index.css file with a relative path', function() {
      const link = document.querySelector('link');
      expect(link).to.not.be.null, "No <link> tag was found";
      expect(link.getAttribute('href')).to.match(/index\.css/), "Make sure you provide a relative path to index.css from index.html";
    });

  });
});
