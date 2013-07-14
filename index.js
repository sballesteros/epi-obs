exports.oBinomial = {
  id: "oBinomial", 
  parameter: [
    {id: "rep",  comment: "reporting rate"},
    {id: "phi",  comment: "over-dispertion"},
    {id: "prop", comment: "proportion of the population under surveillance"}
  ],
  model: {
    distribution: "discretized_normal",
    mean: "rep*prop*x",
    "var": "rep*(1.0-rep)*prop*x + (rep*phi*prop*x)**2"
  }
};


exports.strainBinomial = { 
  id: 'strainBinomial',
  parameter: [
    {id: "rep",   comment: "reporting rate"},
    {id: "prop",  comment: "proportion of the population under surveillance"},
    {id: "ptest", comment: "proportion of hospitals testing patient with symptoms"},    
    {id: "syndromic", comment: "syndromic incidence data used as a covariate"}    
  ],        
  model: {
    distribution: "discretized_normal",
    comment: "Y are strain specific data. We use the syndromic data (syndromic): Y ~ BINOMIAL(syndromic*ptest, x*prop*rep*ptest/(syndromic*ptest)",
    mean: "x*prop*ptest*rep",
    "var": "x*prop*ptest*rep*(1.0-GSL_MIN(x*prop*rep/syndromic, 1.0))"
  }
};
