page_index_count = 0;

tabs_count = 5;

tabs_id = [];

HOST = "127.0.0.1";
PORT = "8000";

url_list = ["www.serienjunkies.org","http://www.hotair.com","http://www.te3p.com","http://www.gruenderszene.de","http://www.socialspark.com","http://www.hasoffers.com","http://www.slodive.com","http://www.gamestlbb.com","http://www.oneddl.eu","http://www.unblog.fr","http://www.orgasmatrix.com","http://www.allkpop.com","http://www.radio.com","http://www.webdesignerdepot.com","http://www.redmondpie.com","http://www.envato.com","http://www.noticierodigital.com","http://www.dawn.com","http://www.babosas.com","http://www.anime44.com","http://www.allthingsd.com","http://www.wpbeginner.com","http://www.deadline.com","http://www.smartpassiveincome.com","http://www.hollywoodlife.com","http://www.amctv.com","http://www.daylife.com","http://www.giorgiotave.it","http://www.ufl.edu","http://www.sucuri.net","http://www.deutsche-startups.de","http://www.fayerwayer.com","http://www.premiumpress.com","http://www.appthemes.com","http://www.psdgraphics.com","http://www.wwtdd.com","http://www.slashgear.com","http://www.tribune.com.pk","http://www.entrance-exam.net","http://www.edublogs.org","http://www.kataweb.it","http://www.hip2save.com","http://www.macromill.com","http://www.wpzoom.com","http://www.mojo-themes.com","http://www.uproxx.com","http://www.awwwards.com","http://www.bossip.com","http://www.zero10.net","http://www.pjmedia.com","http://www.digitaltrends.com","http://www.channeladvisor.com","http://www.n-mobile.net","http://www.gamefront.com","http://www.wpmu.org","http://www.priceindia.in","http://www.tutorialzine.com","http://www.moheet.com","http://www.moveon.org","http://www.barstoolsports.com","http://www.techsupportforum.com","http://www.dailyblogtips.com","http://www.adsmarket.com","http://www.mademan.com","http://www.betanews.com","http://www.wwwhatsnew.com","http://www.inquisitr.com","http://www.newwpthemes.com","http://www.flyertalk.com","http://www.rtl.be","http://www.jquerymobile.com","http://www.flexmls.com","http://www.goodgamestudios.com","http://www.suzukikenichi.com","http://www.ktonanovenkogo.ru","http://www.uberhumor.com","http://www.kriesi.at","http://www.xovi.de","http://www.zonadictoz.com.ar","http://www.onlinewatchmovies.net","http://www.webdesignerwall.com","http://www.techtunes.com.bd","http://www.proceso.com.mx","http://www.thekrazycouponlady.com","http://www.themecraft.net","http://www.tlvmedia.com","http://www.hotnews.ro","http://www.neteller.com","http://www.optimizepress.com","http://www.wsodownloads.info","http://www.bgr.com","http://www.dyn.com","http://www.hypebeast.com","http://www.topdocumentaryfilms.com","http://www.mlmleadsystempro.com","http://www.pepperjamnetwork.com","http://www.thepioneerwoman.com","http://www.mysitemyway.com","http://www.estekhtam.com","http://www.thinkprogress.org","http://www.digitalmarketer.com","http://www.ayudawordpress.com","http://www.ultimatesocialchallenge.com","http://www.androidadvices.com","http://www.vcommission.com","http://www.alt1040.com","http://www.thefrisky.com","http://www.frenchweb.fr","http://www.desi-tashan.com","http://www.xvideos-field.com","http://www.swalif.net","http://www.btemplates.com","http://www.hdfilmsitesi.com","http://www.iwannawatch.net","http://www.korben.info","http://www.themefuse.com","http://www.appstorm.net","http://www.osxdaily.com","http://www.zemtv.com","http://www.geek.com","http://www.ilpost.it","http://www.boredpanda.com","http://www.gopro.com","http://www.wired.jp","http://www.ubergizmo.com","http://www.pagelines.com","http://www.kibeloco.com.br","http://www.tipsandtricks-hq.com","http://www.naldzgraphics.net","http://www.bloter.net","http://www.instantshift.com","http://www.ratemyprofessors.com","http://www.mentalfloss.com","http://www.straitstimes.com","http://www.toucharcade.com","http://www.freshome.com","http://www.cultofmac.com","http://www.giga.de","http://www.moneysavingmom.com","http://www.bo7.net","http://www.mediaite.com","http://www.jandan.net","http://www.collider.com","http://www.parentsconnect.com","http://www.marksdailyapple.com","http://www.tvline.com","http://www.gogoanime.com","http://www.phonegap.com","http://www.sendgrid.com","http://www.raventools.com","http://www.presse-citron.net","http://www.css3.info","http://www.seo-united.de","http://www.cssmania.com","http://www.sankakucomplex.com","http://www.inhabitat.com","http://www.frandroid.com","http://www.androidauthority.com","http://www.alverde.net","http://www.theme.wordpress.com","http://www.domain-pop.com","http://www.gaadi.com","http://www.hornywhores.net","http://www.livechatinc.com","http://www.freejobalert.com","http://www.pcgamer.com","http://www.shatel.ir","http://www.piwik.org","http://www.wp-themes.com","http://www.momdot.com","http://www.surveygizmo.com","http://www.androidcommunity.com","http://www.adultbay.org","http://www.fnac.es","http://www.premiumpixels.com","http://www.fthemes.com","http://www.tehran98.com","http://www.cucirca.com","http://www.emusic.com","http://www.sceper.eu","http://www.nikonrumors.com","http://www.fbprofilecovers.com","http://www.oppapers.com","http://www.mundodastribos.com","http://www.appbank.net","http://www.onlinemeetingnow.com","http://www.sitetrail.com","http://www.gamme.com.tw","http://www.buddypress.org","http://www.xbmc.org","http://www.coliss.com","http://www.tgareed.com","http://www.feedblitz.com","http://www.m7shsh.com","http://www.thedirty.com","http://www.newalbumreleases.net","http://www.johnchow.com","http://www.ebay.cn","http://www.webappers.com","http://www.jaidefinichon.com","http://www.managewp.com","http://www.yourinspirationweb.com","http://www.prisonplanet.com"]


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        switch(request.todo) {

            case "dom_data_store":


                break;
            case "rendering_complete":



                break;
            case "menu_auto_button":


                break;
            case "export_excel_button":


                break;
            case "move_next_page":


                break;

            case "send_dom":

                break;
            default:

                console.log("Nothing to do");

                break;
        }
});