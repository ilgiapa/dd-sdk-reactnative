/*
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache License Version 2.0.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2016-Present Datadog, Inc.
 */

import { NativeModules } from 'react-native';
import { DdSdkConfiguration, DdSdkType, DdLogsType, DdTraceType, DdRumType } from './types';
import DdRumReactNavigationTracking from './rum/instrumentation/DdRumReactNavigationTracking';

const DdSdk: DdSdkType = NativeModules.DdSdk;
const DdLogs: DdLogsType = NativeModules.DdLogs;
const DdTrace: DdTraceType = NativeModules.DdTrace;
const DdRum: DdRumType = NativeModules.DdRum;

export { DdSdkConfiguration, DdSdk, DdLogs, DdTrace, DdRum, DdRumReactNavigationTracking };
