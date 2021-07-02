<script>
  import Logo from "./Logo.svelte";
  import logoSAT from "../../assets/logo-sat.png";
  import logoCAAAREM from "../../assets/logo-caarem.png";
  import logoCanadianBeef from "../../assets/logo-canadian-beef.png";
  import logoUSAPoultry from "../../assets/logo-usa-poultry-eggs.png";
  import logoUSAMeat from "../../assets/logo-us-meat.png";
  import logoSenasica from "../../assets/logo-senasica.png";
  import logoCanada from "../../assets/logo-canada.png";
  import logoUSDA from "../../assets/logo-usda.png";
  import logoComecarne from "../../assets/logo-comecarne.png";
  import logoUSPork from "../../assets/logo-us-pork.png";
  import logoUSMeat from "../../assets/logo-us-meat.png";
</script>

<div class="logos">
  <Logo src={logoSAT} alt="logo-sat" />
  <Logo src={logoCAAAREM} alt="logo-caaarem" />
  <Logo src={logoCanadianBeef} alt="logo-canadian-beef" />
  <Logo src={logoUSAPoultry} alt="logo-usa-poultry-eggs" />
  <Logo src={logoUSAMeat} alt="logo-usa-meat" />
  <Logo src={logoSenasica} alt="logo-senasica" />
  <Logo src={logoCanada} alt="logo-canada" />
  <Logo src={logoUSDA} alt="logo-usda" />
  <Logo src={logoComecarne} alt="logo-comecarne" />
  <Logo src={logoUSPork} alt="logo-us-pork" />
  <Logo src={logoUSMeat} alt="logo-us-meat" />
</div>

<style>
  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
  }
</style>
