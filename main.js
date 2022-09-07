function my()
  { var scount=0;
  var vcount=0;
 
  var str=document.getElementById("in").value;
  var len=str.length;
  for(let i=0;i<str.length;i++)
  {
    if(str[i]==" ")
    {
      scount++;
    }
  if(str[i]=='a'||str[i]=='A'||str[i]=='e'||str[i]=='E'||str[i]=='i'||str[i]=='I'||str[i]=='o'||str[i]=='O'||str[i]=='u'||str[i]=='U')
  {
    vcount++;
  }
  }
  var ccount=len-scount-vcount;
  document.getElementById('a').innerHTML='length Of Total Words=' +len;
  document.getElementById('d').innerHTML='Number Of Spaces=' +scount;
  c
  document.getElementById('b').innerHTML='Number Of Vowels=' +vcount;
  document.getElementById('c').innerHTML='Number Of Constants=' +ccount;
  
  }
