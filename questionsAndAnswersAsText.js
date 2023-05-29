var cs = "" +
    "Q: (xyz.mno) from index r to 10" +
    "A:$$${xr^2+yr+x+mr^{-1}+nr^{-2}+or^{-3}}$$" +
    "" +
    "Q: (xyz.mno) from index 10 to r" +
    "A: 1)Divide LHS by r consecutively and write remainder from bottom to top" +
    "   <br>2)Multiply RHS by r consecutively and write MSD from top to bottom" +
    "   <img src='images/cs/cs.jpg'><img src='images/cs/cs%20(2).jpg'><img src='images/cs/cs%20(3).jpg'>" +
    "" +
    "Q:$$${\\text{How to convert from radix }2^n \\text{ to }2^m}$$" +
    "A: 1) Write each bit in group of n-bits <br> 2) Write m bits at a time in decimal" +
    "" +
    "Q: Range of unsigned number ?" +
    "A:$$${[0,2^n-1]}$$" +
    "" +
    "Q: Range of sign magnitude / one's compliment ?" +
    "A:$$${[-(2^{n-1}-1),(2^{n-1}-1)]}$$" +
    "" +
    "Q: Range of two's compliment ?" +
    "A:$$${[-(2^{n-1}),(2^{n-1}-1)]}$$" +
    "" +
    "Q: How to find ones and twos compliment" +
    "A: ones=> change 1 with 0 and 0 with 1<br>twos=> write as it is from RHS till first 1 is encountered, then change 0 with 1 and 1 with 0" +
    "" +
    "Q: How to find (r-1) and (r) compliment of a number in r radix" +
    "A: (r-1)=> subtract given number from rrrrr... <br> r=> add 1 to the (r-1) compliment" +
    "" +
    "Q: Single precision and double precision representation under IEEE" +
    "A: <img src='images/cs/cs%20(4).jpg'>" +
    "" +
    "Q: Bias in IEEE single bit precison" +
    "A:$$${127\\text{ or }2^7-1}$$" +
    "" +
    "Q: Bias in IEEE double bit precision" +
    "A:$$${1023\\text{ or }2^{10}-1}$$" +
    "" +
    "Q: Original number in decimal from IEEE representaion" +
    "A:$$${\\text{Original }= (-1)^{sign}(1.M)\\times2^{E-Bias}}$$" +
    "" +
    "Q: Condition of overflow" +
    "A: 1) cin different from cout<br>2) cin ⨁ cout = 1" +
    "" +
    "Q: Grey to Binary" +
    "A: <img src='images/cs/cs%20(5).jpg'><img src='images/cs/cs%20(6).jpg'>" +
    ""+
    "Q: Binary to Grey" +
    "A: <img src='images/cs/cs%20(7).jpg'><img src='images/cs/cs%20(8).jpg'>" +
    "" +
    "Q: Binary to BCD(Binary coded decimal)" +
    "A: Write each bit in 4 binary bits <img src='images/cs/cs%20(9).jpg'>" +
    "" +
    "Q: How to add two BCD" +
    "A: <img src='images/cs/cs%20(10).jpg'><img src='images/cs/cs%20(11).jpg'><img src='images/cs/cs%20(12).jpg'>" +
    "" +
    "Q: Canonical form ?" +
    "A: Each variable shall be present in each term" +
    "" +
    "Q: Minterm ?" +
    "A: term of SOP form ∑m(1,2,3,7)" +
    ""+
    "Q: Maxterm ?" +
    "A: term of POS form ∏M(1,2,3,7)" +
    "" +
    "Q: A = 0 or 1 in SOP form" +
    "A: in SOP form ∑m(1,2,3,7) = (ABC)+(A'BC)+... <br>A => 1" +
    ""+
    "Q: A = 0 or 1 in POS form" +
    "A: in POS form ∏M(1,2,3,7) = (A+B+C).(A'+B+C).... <br>A => 0" +
    "" +
    "Q: Consensus Theorem" +
    "A: 1)Threr are 3 variables in toral<br>" +
    "   2)Each term has 2 variables used<br>" +
    "   3)Each variable is used two times in toral<br>" +
    "   4)One variable has it's compliment used in another term, other are used as it is<br>" +
    "   5)Then the term without the variable whose complinent was used is redundand" +
    "" +
    "Q: Distributive law A+(BC)" +
    "A: A+(BC) = (A+B).(A+C)" +
    "" +
    "Q: XOR circuit diagram, symbol, truth table" +
    "A: <img src='images/cs/cs%20(13).jpg'><img src='images/cs/cs%20(14).jpg'>" +
    ""+
    "Q: XNOR circuit diagram, symbol, truth table" +
    "A: <img src='images/cs/cs%20(15).jpg'><img src='images/cs/cs%20(16).jpg'>" +
    "" +
    "Q: Buffer and tristate buffer" +
    "A: <img src='images/cs/cs%20(17).jpg'>" +
    "" +
    "Q: Set of boolean functions that can form all other boolean functions" +
    "A: {NAND}<br>{NOR}<br>{1,⨁,AND}<br>{1,⨁,OR}" +
    "" +
    "Q: Principal of duality to find the equivalent expression of<br>AB + A'C + BC = AB + A'C" +
    "A: + to ×<br>× to +<br>1 to 0<br>0 to 1<br><br>(A+B).(A'+C).(B+C)=(A+B).(A'+C)" +
    "" +
    "Q: Arrange Register, Cache, Main memory, HDD in terms of speed" +
    "A: Register > Cache > Main memory(RAM) > HDD" +
    "" +
    "Q: Estimated access time formulae" +
    "A:$$${\\text{EAT }= (\\text{TLB-HIT})(TLB+MM)+(\\text{TLB-MISS})(TLB+MM+MM)}$$" +
    "" +
    "Q: Access Time" +
    "A: Access time = seek time + rotational time" +
    "" +
    "Q: Transfer Time" +
    "A: Transfer Time = seek time + rotational time + read time" +
    "" +
    "Q: Average Rotational Latency" +
    "A: Average Rotational Latency = <latex-js>$${\\frac{0+\\text{Time taken to complete one rotaion}}{2}}$$</latex-js>"
