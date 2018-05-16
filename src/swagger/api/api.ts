export * from './componentSettings.service';
import { ComponentSettingsService } from './componentSettings.service';
export * from './post.service';
import { PostService } from './post.service';
export * from './put.service';
import { PutService } from './put.service';
export const APIS = [ComponentSettingsService, PostService, PutService];
