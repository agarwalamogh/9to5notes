import java.io.*;
public class OutputStreamDemo 
{  
   public static void main(String[] args) throws IOException 
    {
         FileOutputStream fos = null;
         String s = "This text will be written in the file...Written Again";
         byte buf[] = s.getBytes();
        try
         {
             fos = new FileOutputStream("test1.txt",true);
             for(int i=0; i < buf.length; i++) 
                { 
		    System.out.println("Hello");
                    fos.write(buf[i]);
                }
         }
         catch(FileNotFoundException e)
          {
		System.out.println("Unable to open file");
          }
         finally
          {
              fos.close();
          }
    }
}
