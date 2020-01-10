interface CheckMultiple
  {
	boolean isMultipleOfFive(int n);
  }
class TestLambda2
  {
	public static void main(String[] args)
 	 {
		CheckMultiple cm=(n) -> (n%5==0);
		System.out.println(cm.isMultipleOfFive(13));
		System.out.println(cm.isMultipleOfFive(430));
	 }
  }