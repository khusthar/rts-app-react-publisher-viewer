import { StackProps } from '@chakra-ui/react';
import { StreamStats } from '@millicast/sdk';

import { SettingsPopoverProps } from './settings-popover';

export interface VideoControlBarProps extends StackProps {
  activeAudio?: boolean;
  activePlayback?: boolean;
  activeVideo?: boolean;
  hasAudioTrack?: boolean;
  hasVideoTrack?: boolean;
  isFullScreen?: boolean;
  isStreaming?: boolean;
  onChangeVolume?: (volume: number) => void;
  onToggleAudio?: () => void;
  onToggleFullScreen?: () => void;
  onTogglePlayback?: () => void;
  onToggleVideo?: () => void;
  settings?: SettingsPopoverProps;
  statistics?: StreamStats;
  volume?: number;
}
