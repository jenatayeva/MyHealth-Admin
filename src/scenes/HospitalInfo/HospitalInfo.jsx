import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, List, ListItem, ListItemText } from '@mui/material';
import Header from '../../components/Header';




const HospitalInfo = () => {
  const [secondary, setSecondary] = React.useState(false);


  const branches= [
      'Outpatient department (OPD)',
      'Surgical department',
      'Inpatient service (IP)',
      'Nursing department',
      'Physical medicine',
      'Paramedical department',
      'Rehabilitation department', 
      'Dietary department', 
      'Pharmacy department', 
      'Operation theater complex (OT)', 
      'Radiology department (X-ray)', 
  ]

  return (
    <Box>
			<Header title="John's profile" subtitle='Update your profile' />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Hospital1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Berkarar döwletimiziň Bagtyýarlyk döwri her bir pudaga, her bir adama özüňin özgerdiji güyji bilen täsir etdi. Türkmenistan dünýäde uly abraýy bolan, ykdysady taýdan kuwwatly döwlete öwrüldi. Bularyň hemmesi Çuňňur hormatlanýan Prezidentimiz Gurbanguly Berdimuhamedowyň pähimli ýolbaşçylygynyň, halk hakdaky aladalarynyn, Watanymyzy ösdürmeklik üçin edýän bimöçber yhlasynyň, ýadawsyz gözlegleriniň miwesidir.
          Türkmenistanyň Saglygy goraýyş we derman senagaty ministrliginiň ýolbaşçylygynda 2011-2030 - njy ýyllar üçin ýurtda ýürek- damar keselleriniň garşysyna goreş strategiýasynyň kabul edilip, durmuşa ornaşdyrylmagy hem ilatyň saglygyny dikeltmäge oňaýly täsirini yetirdi.
          Kardiologiýa ylmy - kliniki merkezli hassahananyň işgärleri Türkmenistanyň hormatly Prezidenti Gurbanguly Berdimuhamedowyn “Saglyk” we “Türkmenistany durmuş - ykdysady taýdan ösdürmegiň 2011-2030-njy yyllar üçin Milli maksatnamasynda” ilatyň saglygyny goramagyň hilini we netijeliligini ýokarlandyrmak boýunça goýlan meseleleri çözmekligi üstünlikli amala aşyrýarlar.
          Ýurdumyzda kardiologiýa gullugyny ugrukdyryjy ylmy-amaly merkez hökmünde kardiologiýa ylmy-kliniki merkezli hassahananyň ylmy işgärleri tarapyndan        ýürek- damar keselleri bolan näsaglaryň saglygyny dikeltmek üçin toplumlaýyn maksatnama işlenip düzüldi. Bu maksatnama bejergini iň amatly ýagdaýa          getirmäge, näsaglaryň hassahanada geçirýän wagtlaryny azaltmaga mümkinçilik berer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Branches</Typography>
        </AccordionSummary>
        <AccordionDetails>

            <List>
              
                {branches.map((item)=>(
                <ListItem>
                  <ListItemText
                    primary={item}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                ))}
              
            </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>About Branches</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Awards</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default HospitalInfo;