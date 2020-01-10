class TestStringBuilderMethods
{
public static void main(String[] args)
{
StringBuilder sb1=new StringBuilder();
System.out.println(sb1.capacity());

StringBuilder sb2=new StringBuilder(25);
System.out.println(sb2.capacity());

StringBuilder sb3=new StringBuilder("Hello World!!!");
System.out.println(sb3.capacity());

System.out.println(" "+sb3.append("......."));

StringBuffer sb4=new StringBuffer("Programming Java");
System.out.println(" "+sb4.insert(12,"in "));

System.out.println(" "+sb4);
System.out.println(" "+sb4.delete(12,15));

System.out.println(" "+sb4.reverse());
System.out.println(" "+sb4);

StringBuilder sb5=new StringBuilder("Hello");
System.out.println(" "+sb5.replace(2,3,"www"));

StringBuilder sb6=new StringBuilder("Hello");
System.out.println(" "+sb6.charAt(2));

StringBuilder sb7=new StringBuilder("Hello");
System.out.println(" "+sb7.substring(2));

StringBuilder sb8=new StringBuilder("Hello");
System.out.println(" "+sb8.substring(0,2));
}
}