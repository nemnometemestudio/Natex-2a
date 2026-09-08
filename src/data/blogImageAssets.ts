import imgWindBanner from '../assets/images/wind_banner_textil_mockup_1787608511033.jpg';
import imgBandeiras from '../assets/images/bandeiras_institucionais_textil_1787609106400.jpg';
import imgPolo from '../assets/images/camisa_polo_piquet_modelo_1787608499467.jpg';
import imgStreetwear from '../assets/images/camiseta_oversized_streetwear_1787608527893.jpg';
import imgSocial from '../assets/images/uniforme_social_executivo_1787607310621.jpg';
import imgBrim from '../assets/images/uniforme_brim_industrial_1787607277750.jpg';
import imgTermico from '../assets/images/jaqueta_termica_camara_1787607287947.jpg';
import imgJaleco from '../assets/images/jaleco_medico_uniforme_1787607267372.jpg';
import imgScrub from '../assets/images/scrub_hospitalar_gabardine_1787661730600.jpg';
import imgDoma from '../assets/images/doma_chef_gastronomia_1787661807548.jpg';
import imgAvental from '../assets/images/avental_profissional_brim_1787609128909.jpg';
import imgEscolar from '../assets/images/uniforme_escolar_modelo_1787607297536.jpg';
import imgAgasalho from '../assets/images/agasalho_escolar_completo_1787661783524.jpg';
import imgCortaVento from '../assets/images/jaqueta_cortavento_mockup_1787609117419.jpg';
import imgMoletom from '../assets/images/moletom_canguru_premium_1787661743916.jpg';
import imgColetePuffer from '../assets/images/colete_puffer_executivo_1787661758010.jpg';
import imgMacacao from '../assets/images/macacao_industrial_seguranca_1787661768848.jpg';
import imgEcobag from '../assets/images/ecobag_lona_algodao_1787661795317.jpg';
import imgFabrica from '../assets/images/natex_og_image_1787672726891.jpg';

export const BLOG_ASSET_IMAGES = {
  windBanner: imgWindBanner,
  bandeiras: imgBandeiras,
  polo: imgPolo,
  streetwear: imgStreetwear,
  social: imgSocial,
  brim: imgBrim,
  termico: imgTermico,
  jaleco: imgJaleco,
  scrub: imgScrub,
  doma: imgDoma,
  avental: imgAvental,
  escolar: imgEscolar,
  agasalho: imgAgasalho,
  cortaVento: imgCortaVento,
  moletom: imgMoletom,
  coletePuffer: imgColetePuffer,
  macacao: imgMacacao,
  ecobag: imgEcobag,
  fabrica: imgFabrica,
};

/**
 * Returns a guaranteed high-resolution local image based on category
 */
export function getCategoryFallbackImage(categorySlug?: string): string {
  switch (categorySlug) {
    case 'material-promocional-visual':
      return imgWindBanner;
    case 'outlet-loja-fabrica':
      return imgFabrica;
    case 'uniformes-profissionais':
      return imgBrim;
    case 'private-label':
      return imgStreetwear;
    case 'tecidos-malharia':
      return imgPolo;
    case 'estamparia-bordado':
      return imgMoletom;
    case 'processo-qualidade':
      return imgSocial;
    default:
      return imgFabrica;
  }
}
