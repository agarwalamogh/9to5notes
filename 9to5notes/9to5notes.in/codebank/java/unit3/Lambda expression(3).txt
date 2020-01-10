interface GenerateRandom
 {
	double generateRandomValue();
 }
class TestLambda3
 {
	public static void main(String[] args)
          {
		GenerateRandom gr=() -> Math.random() * 100;
		System.out.println(gr.generateRandomValue());
		System.out.println(gr.generateRandomValue());
	  }
 }