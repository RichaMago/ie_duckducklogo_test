const {Selector} = require('testcafe');


module.exports = {

    url: `${process.env.TESTCAFE_URL}`,


    ducklogo: {
        ducklogoverify: function() {
            return Selector('#logo_homepage_link').with({ boundTestRun: testController })
        }
    },

    SearchElement: {
        SearchElementInput: function() {
            return Selector('#search_form_input_homepage').with({ boundTestRun: testController })
        }
    },

    Click:{
        ClickSearchButton: function(){
            return Selector('#search_button_homepage').with({ boundTestRun: testController })
        }
       },


   SearchResult:{
   SuperSearchResult: function(){
       return Selector('.acp:nth-child(1)').with({ boundTestRun: testController })
   }
   },

   Hamburger:{
    HamburgerMenuSearch: function(){
        return Selector('.header__button--menu').with({ boundTestRun: testController })
    }
   },

   HamburgerClick:{
       HamburgerClickExpect: function(){
        return Selector('.clear:nth-child(2) > a:nth-child(1)').with({ boundTestRun: testController })
       }
   },

   ThemesLink:{
       ThemesLinkClick: function(){
           return Selector('.nav-menu--theme:nth-child(2) li.clear:nth-child(2) > a:nth-child(1)').with({ boundTestRun: testController })
       }
   },

   DarkMode:{
       DarkModeLink: function(){
        return Selector('.page-settings:nth-child(2) div.js-set-detail form.frm--settings--theme div.fix div.set-themes__wrapper:nth-child(4) > label.set-theme').with({ boundTestRun: testController })   
       }
   },

   PageBackground:{
       PageBackgroundColour: function(){
        return Selector('#content_internal').with({ boundTestRun: testController })   
       }
   },

   SuperSearch:{
       SuperSearchBox: function(){
           return Selector('#search_form_input_homepage').with({ boundTestRun: testController }) 
       }
   },

   ElementsSearch:{
        ElementsSearch10: function(j){
            const selector_nth = `.acp:nth-child(${j})`;
            return Selector(selector_nth).with({ boundTestRun: testController }) 
        }
   }
}

