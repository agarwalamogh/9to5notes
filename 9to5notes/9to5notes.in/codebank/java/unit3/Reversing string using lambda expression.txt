import java.util.*;
interface ReverseString
{
	String reverseString(String s);
}
class TestReverseStringBlockLambda
{
	public static void main(String[] args)
	  {
		ReverseString rs=(s)->{
					String reversed_string="";
					for(int i=s.length()-1;i>=0;i--)
						reversed_string=reversed_string+s.charAt(i);
					return reversed_string;
				      };
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the word you want to reverse");
		String input=sc.next();
		System.out.println("Here is your reversed string!!!  "+rs.reverseString(input));
          }
}