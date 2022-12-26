<template>
  <section>
    <TabView>
      <TabPanel>
      <template #header>
        <i class="pi pi-calendar"></i>
        <span>About Us</span>
      </template>
        A propos de nous
      </TabPanel>
      <TabPanel>
        <template #header>
          <i class="pi pi-user"></i>
          <span>Mentions Legals</span>
        </template>
        <h2>Mentions légales</h2>
        <h3>Hébergeur du site</h3>
        <br>
        <NuxtLink to="/">https://www.space-cube.xyz</NuxtLink> est édité par un particulier agissant à titre non professionnel.<br>
        Ce site est hébergé à Strasbourg dans un datacenter de la société OVH SAS :
        <b>
          OVH <br>
          SAS au capital de 10 000 000 € RCS Roubaix – Tourcoing 424 761 419 00045 <br>
          Code APE 6202A - N° TVA : FR 22 424 761 419 <br>
          Siège social : 2 rue Kellermann 59100 Roubaix - France.
        </b>
      </TabPanel>
      <TabPanel>
        <template #header>
          <i class="pi pi-user"></i>
          <span>Condition General d'Utilisation</span>
        </template>
        <h2>Conditions Générales d'utilisations (CGU)</h2>
        <small>
          Dernière mise à jour le 26 Décembre 2022
        </small>
        <hr>
        <p>
          Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des
          modalités de mise à disposition du site et de ses services et de définir les conditions
          d’accès et d’utilisation des services par « l'Utilisateur ».
          Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
          Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes
          CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque utilisateur
          accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir
          lu et compris les CGU et je les accepte ».
          En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à
          l'accès des services proposés par le site.
          <a href="{{ path('homepage') }}">{{ base_url }}</a> se réserve le droit de modifier unilatéralement et à tout moment le contenu des
          présentes CGU.
        </p>
        <h3>ARTICLE 1: Accès au site</h3>
        <p>
          Le site <a href="{{ path('homepage') }}">{{ base_url }}</a> permet à l'Utilisateur un accès gratuit aux services suivants :
          La rédaction de commentaire sur les articles publiés par le site SpaceCube
          Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais
          supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.)
          sont à sa charge.
          L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s’inscrire en remplissant le
          formulaire. En acceptant de s’inscrire aux services réservés, l’Utilisateur membre s’engage à fournir des
          informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email.
          Pour accéder aux services, l’Utilisateur doit ensuite s'identifier à l'aide de son identifiant et de son mot de
          passe qui lui seront communiqués après son inscription.
          Tout Utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se rendant à la
          page dédiée sur son espace personnel. Celle-ci sera effective dans un délai raisonnable.
          Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou
          serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la
          responsabilité de <a href="{{ path('homepage') }}">{{ base_url }}</a>. Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à
          l’éditeur de toute interruption ou suspension de service, même sans préavis.
          L'Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse email de l’éditeur
          communiqué à <a href="{{ path('legal_notice') }}">les mentions légales</a>.
        </p>
        <h3>ARTICLE 2 : Collecte des données</h3>
        <p>
          Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la
          vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux
          libertés.
          En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès,
          de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :
          <br>
          · via un formulaire de contact ; <br>
          · via son espace personnel ; <br>
        </p>
        <h3>ARTICLE 3 : Propriété intellectuelle</h3>
        <p>
          <a href="{{ path('homepage') }}">{{ base_url }}</a> est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments
          accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
          L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des
          différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute
          utilisation à des fins commerciales et publicitaires est strictement interdite.
          Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation
          expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et
          suivants du Code de la propriété intellectuelle.
          Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui
          reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.
        </p>
        <h3>ARTICLE 4 : Responsabilité</h3>
        <p>
          Les sources des informations diffusées sur le site <a href="{{ path('homepage') }}">{{ base_url }}</a> sont réputées fiables mais le
          site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
          Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré
          des mises à jour régulières, le site <a href="{{ path('homepage') }}">{{ base_url }}</a> ne peut être tenu responsable de la
          modification des dispositions administratives et juridiques survenant après la publication. De même, le site
          ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.
          L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que
          soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe.
          Le site décline toute responsabilité.
          Le site <a href="{{ path('homepage') }}">{{ base_url }}</a> ne peut être tenu pour responsable d’éventuels virus qui pourraient
          infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au
          téléchargement provenant de ce site.
          La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et
          insurmontable d'un tiers.
        </p>
        <h3>ARTICLE 5 : Liens hypertextes</h3>
        Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens,
        il sortira du site <a href="{{ path('homepage') }}">{{ base_url }}</a>. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles
        aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
        <h3>ARTICLE 6 : Cookies</h3>
        <p>
          Pour la bonne opération du Site Internet, <a href="{{ path('homepage') }}">{{ base_url }}</a> peut être amené à déposer des cookies dans le navigateur de l’utilisateur.
          Pour des besoins statistiques, <a href="{{ path('homepage') }}">{{ base_url }}</a> peut être amené à recueillir des informations de navigation via l'utilisation de cookies.
          L’utilisateur est libre d’accepter ou de refuser les cookies en configurant son navigateur (désactivation de tout ou partie des cookies –
          voir manuel du navigateur Web ou fonction d’aide).
          La désactivation des cookies peut entraîner l’indisponibilité de certains Services du Site.
          L’utilisateur peut, par ailleurs, à tout moment supprimer l’enregistrement des cookies, ou les cookies déjà enregistrés sur son ordinateur,
          en paramétrant les options de protection de la vie privée de son navigateur Internet (par exemple : Outils > Effacer mes traces > Cookies,
          sur Mozilla Firefox et Outils > Supprimer l’historique de navigation > Supprimer les cookies, sur Microsoft Internet Explorer).
          Le site internet de la CNIL indique également la marche à suivre pour gérer et supprimer les cookies sur son navigateur.
          Ces explications sont disponibles à l’adresse suivante : <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="nofollow" title="lien vers la cnil">https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser</a>.
          <br>
          Les cookies déposés, le cas échéant, ont une durée d’activité de treize (13) mois au maximum.
        </p>
        <h3>ARTICLE 7 : Publication par l’Utilisateur</h3>
        <p>
          Le site permet aux membres de publier les contenus suivants : Commentaires. <br>
          Dans ses publications, le membre s’engage à respecter les règles de la Netiquette (règles de bonne conduite
          de l’internet) et les règles de droit en vigueur. <br>
          Le site peut exercer une modération sur les publications et se réserve le droit de refuser leur mise en ligne,
          sans avoir à s’en justifier auprès du membre. <br>
          Le membre reste titulaire de l’intégralité de ses droits de propriété intellectuelle. Mais en publiant une
          publication sur le site, il cède à la société éditrice le droit non exclusif et gratuit de représenter, reproduire,
          adapter, modifier, diffuser et distribuer sa publication, directement ou par un tiers autorisé, dans le monde
          entier, sur tout support (numérique ou physique), pour la durée de la propriété intellectuelle. Le Membre
          cède notamment le droit d'utiliser sa publication sur internet et sur les réseaux de téléphonie mobile.
          La société éditrice s'engage à faire figurer le nom du membre à proximité de chaque utilisation de sa
          publication. <br>
          Tout contenu mis en ligne par l'Utilisateur est de sa seule responsabilité. L'Utilisateur s'engage à ne pas
          mettre en ligne de contenus pouvant porter atteinte aux intérêts de tierces personnes. Tout recours en justice
          engagé par un tiers lésé contre le site sera pris en charge par l'Utilisateur. <br>
          Le contenu de l'Utilisateur peut être à tout moment et pour n'importe quelle raison supprimé ou modifié par
          le site, sans préavis.
        </p>
        <h3>ARTICLE 8 : Droit applicable et juridiction compétente</h3>
        <p>
          La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né
          <br>
          entre les parties, les tribunaux français seront seuls compétents pour en connaître. <br>
          Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux
          coordonnées inscrites dans <a href="{{ path('legal_notice') }}">les mentions légales</a>.
        </p>
      </TabPanel>
    </TabView>
  </section>
</template>
<script>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

export default {
  name: 'AboutPage',
  components: { TabView, TabPanel },
  head () {
    return {
      title: 'Space-Cube - About us'
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/global.scss";

.p-tabview {
  margin-top: 0.6rem;
}
</style>
