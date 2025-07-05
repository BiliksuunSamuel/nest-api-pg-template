import { readdirSync } from 'fs';
import { join } from 'path';
import { Logger, Type } from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

const ENTITIES_FOLDER = join(__dirname, '../entities');

export function loadEntities(): EntityClassOrSchema[] {
  const logger = new Logger('loadSchemas');
  const entities: EntityClassOrSchema[] = [];

  try {
    const files = readdirSync(ENTITIES_FOLDER).filter((file) =>
      file.endsWith('.entity.js'),
    );

    for (const file of files) {
      const modulePath = join(ENTITIES_FOLDER, file);
      const module = require(modulePath);

      Object.keys(module).forEach((key) => {
        const entity = module[key];

        if (
          typeof entity === 'function' &&
          !key.toLowerCase().includes('entity')
        ) {
          logger.debug(`✅ Registering entity: ${key}`);
          entities.push(entity as Type<any>);
        } else {
          logger.debug(`Skipping: ${key}`);
        }
      });
    }
  } catch (error) {
    logger.error('Error loading entities:', error);
  }
  logger.debug(`Loaded ${entities.length} entities`);
  return entities;
}
