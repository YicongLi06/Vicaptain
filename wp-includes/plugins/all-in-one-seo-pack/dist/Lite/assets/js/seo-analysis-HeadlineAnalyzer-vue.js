(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["seo-analysis-HeadlineAnalyzer-vue"],{d206:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aioseo-headline-analyzer"},[a("core-card",{attrs:{slug:"analyzeNewHeadline","hide-header":"","no-slide":"",toggles:!1}},[a("core-analyze",{attrs:{header:e.strings.enterYourHeadline,description:e.strings.writeIrresistibleSEOHeadlines,isAnalyzing:e.isAnalyzing,analyzeTime:e.analyzeTime,placeholder:e.strings.placeholder},on:{startAnalyzing:e.startAnalyzing},scopedSlots:e._u([{key:"errors",fn:function(){return["headline"===e.analyzer&&e.analyzeError?a("div",{staticClass:"analyze-errors aioseo-description aioseo-error",domProps:{innerHTML:e._s(e.analyzeError)}}):e._e()]},proxy:!0}])})],1),e._l(e.headlines,(function(t,s){return a("core-card",{key:s,attrs:{id:"aioseo-headline-result"+e.hashCode(s),slug:"analyzeHeadline"+s,"save-toggle-status":!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("core-analyze-score",{attrs:{score:e.parseResult(t).score}}),e._v(" “"+e._s(s)+"” "),a("svg-trash",{nativeOn:{click:function(t){return e.startDeleteheadline(s)}}})]},proxy:!0}],null,!0)},[a("div",{staticClass:"headline-result-main"},[a("core-headline-score",{attrs:{score:e.parseResult(t).score,loading:e.analyzing}}),a("div",{staticClass:"headline-result-body"},[a("core-headline-result",{attrs:{result:e.parseResult(t).result}})],1)],1)])}))],2)},i=[],n=a("5530"),l=(a("b64b"),a("159b"),a("2f62")),r={data:function(){return{headline:null,headlines:{},isAnalyzing:!1,analyzeTime:2,strings:{enterYourHeadline:this.$t.__("Enter Your Headline",this.$td),placeholder:this.$t.__("Top 10 Ways to Increase Traffic",this.$td),writeIrresistibleSEOHeadlines:this.$t.sprintf(this.$t.__("Our Headline Analyzer tool enables you to write irresistible SEO headlines%1$sthat drive traffic, shares, and rank better in search results.",this.$td),"<br>"),analyze:this.$t.__("Analyze",this.$td)}}},watch:{analyzeError:function(e){e&&(this.isAnalyzing=!1)}},computed:Object(n["a"])(Object(n["a"])({},Object(l["e"])(["options","analyzer","analyzing","analyzeError"])),Object(l["c"])(["getHeadlineAnalysisResults"])),methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(l["b"])(["runHeadlineAnalyzer","deleteHeadline"])),Object(l["d"])(["toggleCard","closeCard"])),{},{parseResult:function(e){return JSON.parse(e)},startAnalyzing:function(e){this.headline=e,this.$store.commit("analyzing",!0),this.$store.commit("analyzeError",!1),this.runHeadlineAnalyzer({headline:this.headline,shouldStoreHeadline:!0}),this.isAnalyzing=!0,setTimeout(this.checkStatus,1e3*this.analyzeTime),this.closeAllCards()},checkStatus:function(){var e=this;this.isAnalyzing=!1,this.analyzing?this.$nextTick((function(){e.isAnalyzing=!0,2>e.analyzeTime&&(e.analyzeTime=1),e.analyzeTime=e.analyzeTime/2,setTimeout(e.checkStatus,1e3*e.analyzeTime)})):(this.headline=null,this.headlines=this.getHeadlineAnalysisResults,this.toggleFirstCard(),this.$nextTick((function(){var t=Object.keys(e.headlines),a=document.querySelector(".aioseo-header"),s=a.offsetHeight+a.offsetTop+30;e.$scrollTo("#aioseo-headline-result"+e.hashCode(t[0]),{offset:-s})})))},startDeleteheadline:function(e){var t=this;this.closeAllCards(),this.$delete(this.headlines,e),this.deleteHeadline(e).then((function(){t.headlines=t.getHeadlineAnalysisResults}))},closeAllCards:function(){var e=this,t=Object.keys(this.headlines);t.forEach((function(t){e.closeCard("analyzeHeadline"+t)}))},toggleFirstCard:function(){var e=Object.keys(this.headlines);this.toggleCard("analyzeHeadline"+e[0])},hashCode:function(e){if(e){var t,a,s=0;for(t=0;t<e.length;t++)a=e.charCodeAt(t),s=(s<<5)-s+a,s|=0;return s}}}),mounted:function(){this.$store.commit("analyzeError",!1),this.headlines=this.getHeadlineAnalysisResults,this.toggleFirstCard()}},o=r,d=(a("d7f1"),a("2877")),h=Object(d["a"])(o,s,i,!1,null,null,null);t["default"]=h.exports},d7f1:function(e,t,a){"use strict";a("fa49")},fa49:function(e,t,a){}}]);