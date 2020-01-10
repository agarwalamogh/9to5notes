import java.util.Scanner;
class RegisteredPerson
  {
	String name;
	long registration_id;
	static int count;
	void registerNow()
	  {
		Scanner s=new Scanner(System.in);
		
		System.out.println("Enter Your Name");
		name=s.nextLine();

		System.out.println("Enter Your Registration Number");
		registration_id=s.nextLong();
		
		count=count+1;
	  }
  
	void displayMessage()
	  {
		System.out.println("Welcome "+name+" You are registered now!!!");
	  }
  }
class TestStaticNonstaticAccessibility
  {
	public static void main(String ar[])
	  {
		RegisteredPerson rp1=new RegisteredPerson();
		rp1.registerNow();
		rp1.displayMessage();
		System.out.println("Number of Person registered are "+RegisteredPerson.count);

		RegisteredPerson rp2=new RegisteredPerson();
		rp2.registerNow();
		rp2.displayMessage();
		System.out.println("Number of Person registered are "+RegisteredPerson.count);
	  }
   }