import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Logo from '../static/logo.png';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
export default function Details()
{
    return (
        <div className="App">
        <img src={Logo} alt="website-logo"/> 
        
    
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
        <Link href="/clanky">
        <Button variant="contained" color="primary">
         Články
        </Button>
        </Link>
        <Link href="/nejnavstevovanejsi">
        <Button variant="contained" color="primary">
         Nejnavštěvovanější
        </Button>
        </Link>
        <Link href="/nejnovejsi">
        <Button variant="contained" color="primary">
         Nejnovější
        </Button>
        </Link>
        
        <Container fixed maxWidth="sm">
          <h1>Témata</h1>
          
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        
        </Container>
        <style jsx>{`
        h1{
          font-size: 3rem;
        }
        .App{
          background-color: #3792cb;
        }
        img{
          position: absolute;
          top: 0px;
          right: 15px;
          align-items: right;
          width:225px;
          height:200px;
        }
        `}</style>
        </div>
      );
}