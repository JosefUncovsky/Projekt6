import Link from 'next/link';
import Button from '@material-ui/core/Button';
//import Logo from './Logo.png';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
export default function Details()
{
    return (
        <div className="App">
         
        
    
        <Link href="/index">
        <Button variant="contained" color="primary">
        Homepage
        </Button>
        </Link>
        <Link href="/autori">
        <Button variant="contained" color="primary" >
         Autoři
        </Button>
        </Link>
        <Link href="/temata">
        <Button variant="contained" color="primary">
         Témata
        </Button>
        </Link>
        <Link href="/clanky">
        <Button variant="contained" color="primary">
         Články
        </Button>
        </Link>
        <Link href="/nejnovejsi">
        <Button variant="contained" color="primary">
         Nejnovější
        </Button>
        </Link>
        
        <Container fixed maxWidth="sm">
          <h1>Nejnavštěvovanější</h1>
          
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        
        </Container>
        <style jsx>{`
        h1{
          font-size: 3rem;
        }
        .App{
          background-color: skyblue;
        }
        
        `}</style>
        </div>
      );
}