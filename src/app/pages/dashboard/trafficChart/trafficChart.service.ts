import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;

    var elData = [
      {
        value: 2000,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Other',
        percentage: 87,
        order: 1,
      }, {
        value: 1500,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Search engines',
        percentage: 22,
        order: 4,
      }, {
        value: 1000,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Referral Traffic',
        percentage: 70,
        order: 3,
      }, {
        value: 1200,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Direct Traffic',
        percentage: 38,
        order: 2,
      }, {
        value: 400,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Ad Campaigns',
        percentage: 17,
        order: 0,
      },
    ];

        return [{
              datasets: [{
                  data: [2000, 1500, 1000, 1200, 400],
                  borderWidth: 0,
                  backgroundColor: [dashboardColors.white, 
                                  dashboardColors.gossip,
                                  dashboardColors.silverTree,
                                  dashboardColors.surfieGreen,
                                  dashboardColors.blueStone, 
                                  ], 
                  hoverBackgroundColor: [colorHelper.shade(dashboardColors.white, 15), 
                                  colorHelper.shade(dashboardColors.gossip, 15),
                                  colorHelper.shade(dashboardColors.silverTree, 15),
                                  colorHelper.shade(dashboardColors.surfieGreen, 15),
                                  colorHelper.shade(dashboardColors.blueStone, 15),
                                  ], 
              }],

              // These labels appear in the legend and in the tooltips when hovering different arcs
              labels: [
                  'Other',
                  'Search engines',
                  'Referral Traffic', 'Direct Traffic', 'Ad Campaigns',
              ],
          }];
  }
}
