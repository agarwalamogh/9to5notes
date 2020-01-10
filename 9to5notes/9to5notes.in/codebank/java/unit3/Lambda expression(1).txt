interface ShowMyNumber
  {
	String displayNumber();
  }
class TestLambda1 
  {
public static void main(String[] main)
   {
	ShowMyNumber smn=() -> "123456789";
	System.out.println(smn.displayNumber());
   }
  }