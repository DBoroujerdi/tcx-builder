import { BaseObject } from '../_common';
import { Duration } from './Duration';
import { DurationAttributes } from './DurationAttributes';
import { HeartRateValue } from '../HeartRate';

export class HeartRateAbove extends Duration {
  public HeartRate: HeartRateValue;

  constructor(options: {
    heartRate: HeartRateValue;
  }) {
    const attributes = new DurationAttributes('HeartRateAbove_t');
    super(attributes);

    this.HeartRate = options.heartRate;
  }

  toXml() {
    return BaseObject.buildXmlNode('HeartRate', this.HeartRate.toXml());
  }
}
