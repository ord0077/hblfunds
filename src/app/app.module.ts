import { BrowserModule } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LandComponent } from '../pages/landing/land/land';
import { SliderPage } from '../pages/landing/slider/slider';
import { SliderOneComponent } from '../pages/landing/slider/slider-one/slider-one';
import { SliderTwoComponent } from '../pages/landing/slider/slider-two/slider-two';
import { SliderThreeComponent } from '../pages/landing/slider/slider-three/slider-three';
import { SliderFourComponent } from '../pages/landing/slider/slider-four/slider-four';
import { MainComponent } from '../pages/main/main';
import { AboutPage } from '../pages/main/about/about';
import { ContactPage } from '../pages/main/contact/contact';
import { HomePage } from '../pages/main/home/home';
import { HeaderMainComponent } from '../pages/main/headerMain/headerMain';
import { FooterMainComponent } from '../pages/main/footerMain/footerMain';
import { SidebarMain } from '../pages/main/sidebarMain/sidebarMain';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AmlFunds } from '../pages/main/amlfunds/amlfunds';
import { MoneyMarket } from '../pages/main/amlfunds/moneyMarket/moneyMarket';
import { CashFunds } from '../pages/main/amlfunds/moneyMarket/cashFunds/cashFunds';
import { MoneyMarketFund } from '../pages/main/amlfunds/moneyMarket/moneyMarketFund/moneyMarketFund';
import { GovernmentSecuritiesFund } from '../pages/main/amlfunds/moneyMarket/governmentSecuritiesFund/governmentSecuritiesFund';
import { IncomeFund } from '../pages/main/amlfunds/moneyMarket/incomeFund/incomeFund';
import { EquityFunds } from '../pages/main/amlfunds/equityFunds/equityFunds';
import { EnergyFund } from '../pages/main/amlfunds/equityFunds/energyFund/energyFund';
import { EquityFund } from '../pages/main/amlfunds/equityFunds/equityFund/equityFund';
import { MultiAssetFund } from '../pages/main/amlfunds/equityFunds/multiAssetFund/multiAssetFund';
import { StockFund } from '../pages/main/amlfunds/equityFunds/stockFund/stockFund';
import { IslamicAssetAllocationFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicAssetAllocationFund/islamicAssetAllocationFund';
import { ShariahCompliantFunds } from '../pages/main/amlfunds/shariahCompliantFunds/shariahCompliantFunds';
import { IslamicEquityFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicEquityFund/islamicEquityFund';
import { IslamicIncomeFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicIncomeFund/islamicIncomeFund';
import { IslamicMoneyMarketFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicMoneyMarketFund/islamicMoneyMarketFund';
import { IslamicStockFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicStockFund/islamicStockFund';
import { SeparatelyManagedAccounts } from '../pages/main/amlfunds/separatelyManagedAccounts/separatelyManagedAccounts';
import { FinancialPlans } from '../pages/main/amlfunds/financialPlans/financialPlans';
import { FiancialPlanningFund } from '../pages/main/amlfunds/financialPlans/fiancialPlanningFund/fiancialPlanningFund';
import { IslamicFinancialPlanningFund } from '../pages/main/amlfunds/financialPlans/islamicFinancialPlanningFund/islamicFinancialPlanningFund';
import { VoluntaryPensionScheme } from '../pages/main/amlfunds/voluntaryPensionScheme/voluntaryPensionScheme';
import { IslamicPensionFund } from '../pages/main/amlfunds/voluntaryPensionScheme/islamicPensionFund/islamicPensionFund';
import { PensionFund } from '../pages/main/amlfunds/voluntaryPensionScheme/pensionFund/pensionFund';
import { CalculatorPage } from '../pages/main/calculator/calculator';
import { ShrinkHeader } from '../pages/main/shrink-header/shrinkHeader';
import { NavComponent } from '../pages/main/nav/nav';
import { NewsComponent } from '../pages/main/news/news';
import { FinancialReports } from '../pages/main/reports/financialReports/financialReports';
import { FundManagerReports } from '../pages/main/reports/fundManagerReports/fundManagerReports';
import { CustomerService } from '../pages/main/customerService/customerService';
import { PensionCalculator } from '../pages/main/pensionCalculator/pensionCalculator';
import { ReportsComponent } from '../pages/main/reports/reports';
import { RiskCalculator } from '../pages/main/riskCalculator/riskCalculator';
import { TaxCalculator } from '../pages/main/taxCalculator/taxCalculator';
import {InvestorEducation} from '../pages/main/investorEducation/investorEducation';
import {WhyHblAml} from '../pages/main/whyHblAml/whyHblAml';
import {SavingInvestment} from '../pages/main/savingInvestment/savingInvestment';
import {TaxRebate} from '../pages/main/taxRebate/taxRebate';
import {FaqMutualFunds} from '../pages/main/faqMutualFunds/faqMutualFunds';
import {FaqPensionFunds} from '../pages/main/faqPensionFunds/faqPensionFunds';
import {Videos} from '../pages/main/videos/videos';
import {InvestorServices} from '../pages/main/investorServices/investorServices';
import {HowToInvest} from '../pages/main/howToInvest/howToInvest';
import {ValueAddedServices} from '../pages/main/valueAddedServices/valueAddedServices';
import { AccordionComponent } from '../components/accordion/accordion';
import {HttpClientModule} from '@angular/common/http';
import {TellFriend} from '../pages/main/tellFriend/tellFriend';
import {AboutUs} from '../pages/main/aboutUs/aboutUs';
import {Settings} from '../pages/main/settings/settings';
import {BranchLocator} from '../pages/main/branchLocator/branchLocator';
import {FollowUs} from '../pages/main/followUs/followUs';
import { SMS } from '@ionic-native/sms';
import {RetirementCalculator} from '../pages/main/retirementCalculator/retirementCalculator';
import {MutualCalculator} from '../pages/main/mutualCalculator/mutualCalculator';
import { HttpModule } from '@angular/http';
import { RssProvider } from '../providers/rss/rss';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import {Eservice} from '../pages/main/eservice/eservice';
import { MomentModule } from 'angular2-moment';
import { StocksHome } from '../pages/main/stocksHome/stocksHome';
import { TopStocks } from '../pages/main/topStocks/topStocks';
import { Push } from '@ionic-native/push';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LandComponent,
    SliderPage,
    SliderOneComponent,
    SliderTwoComponent,
    SliderThreeComponent,
    SliderFourComponent,
    MainComponent,
    AboutPage,
    ContactPage,
    HeaderMainComponent,
    FooterMainComponent,
    SidebarMain,
    AmlFunds,
    MoneyMarket,
    CashFunds,
    MoneyMarketFund,
    GovernmentSecuritiesFund,
    IncomeFund,
    EquityFunds,
    EnergyFund,
    EquityFund,
    MultiAssetFund,
    StockFund,
    IslamicAssetAllocationFund,
    IslamicEquityFund,
    IslamicIncomeFund,
    IslamicMoneyMarketFund,
    ShariahCompliantFunds,
    IslamicStockFund,
    SeparatelyManagedAccounts,
    FinancialPlans,
    FiancialPlanningFund,
    IslamicFinancialPlanningFund,
    VoluntaryPensionScheme,
    IslamicPensionFund,
    PensionFund,
    CalculatorPage,
    ShrinkHeader,
    NavComponent,
    NewsComponent,
    ReportsComponent,
    CustomerService,
    PensionCalculator,
    FinancialReports,
    FundManagerReports,
    ReportsComponent,
    RiskCalculator,
    TaxCalculator,
    InvestorEducation,
    WhyHblAml,
    SavingInvestment,
    TaxRebate,
    FaqMutualFunds,
    FaqPensionFunds,
    Videos,
    InvestorServices,
    HowToInvest,
    ValueAddedServices,
    AccordionComponent,
    TellFriend,
    AboutUs,
    Settings,
    BranchLocator,
    FollowUs,
    RetirementCalculator,
    MutualCalculator,
    Eservice,
    StocksHome,
    TopStocks
  ],
  imports: [
    IonicStorageModule.forRoot(),
    BrowserModule,
    HttpModule,
    MomentModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Go Back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
    }),
    HighchartsChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
        
    MyApp,
    HomePage,
    ListPage,
    LandComponent,
    SliderPage,
    SliderOneComponent,
    SliderTwoComponent,
    SliderThreeComponent,
    SliderFourComponent,
    MainComponent,
    AboutPage,
    ContactPage,
    HeaderMainComponent,
    FooterMainComponent,
    SidebarMain,
    AmlFunds,
    MoneyMarket,
    CashFunds,
    MoneyMarketFund,
    GovernmentSecuritiesFund,
    IncomeFund,
    EnergyFund,
    EquityFunds,
    EquityFund,
    MultiAssetFund,
    StockFund,
    IslamicAssetAllocationFund,
    ShariahCompliantFunds,
    IslamicEquityFund,
    IslamicIncomeFund,
    IslamicMoneyMarketFund,
    IslamicStockFund,
    SeparatelyManagedAccounts,
    FinancialPlans,
    FiancialPlanningFund,
    IslamicFinancialPlanningFund,
    VoluntaryPensionScheme,
    IslamicPensionFund,
    PensionFund,
    CalculatorPage,
    NavComponent,
    NewsComponent,
    ReportsComponent,
    CustomerService,
    PensionCalculator,
    FundManagerReports,
    FinancialReports,
    ReportsComponent,
    RiskCalculator,
    TaxCalculator,
    InvestorEducation,
    WhyHblAml,
    SavingInvestment,
    TaxRebate,
    FaqMutualFunds,
    FaqPensionFunds,
    Videos,
    InvestorServices,
    HowToInvest,
    ValueAddedServices,
    TellFriend,
    AboutUs,
    Settings,
    BranchLocator,
    FollowUs,
    RetirementCalculator,
    MutualCalculator,
    Eservice,
    StocksHome,
    TopStocks
  ],
  providers: [
    StatusBar,
    SplashScreen,Push,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RssProvider,
    GoogleAnalytics,
    YoutubeVideoPlayer,
    Push,SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule {}
