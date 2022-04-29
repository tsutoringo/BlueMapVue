import { InjectionKey } from 'vue';

import { MapViewer } from 'bluemap/src/MapViewer';
import { MapControls } from 'bluemap/src/controls/map/MapControls';
import { FreeFlightControls } from 'bluemap/src/controls/freeflight/FreeFlightControls';


export const useBlueMapApp = (rootElement: Element) => {
  const events = rootElement;
  const mapViewer = new MapViewer(events);

  const mapControls = new MapControls(mapViewer.renderer.domElement);
  const freeFlightControls = new FreeFlightControls(mapViewer.renderer.domElement);

  return {

  }
}

export type BlueMapAppStore = ReturnType<typeof useBlueMapApp>;
export const BlueMapAppInejctionKey: InjectionKey<BlueMapAppStore> = Symbol('BlueMapApp');
