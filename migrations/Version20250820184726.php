<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250820184726 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE accessory_group (accessory_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_E7B9D46527E8CC78 (accessory_id), INDEX IDX_E7B9D465FE54D947 (group_id), PRIMARY KEY(accessory_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE article_group (article_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_1A7736D47294869C (article_id), INDEX IDX_1A7736D4FE54D947 (group_id), PRIMARY KEY(article_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE board_group (board_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_CF7DA3EEE7EC5785 (board_id), INDEX IDX_CF7DA3EEFE54D947 (group_id), PRIMARY KEY(board_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE chat_group (chat_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_6CBDA95E1A9A7125 (chat_id), INDEX IDX_6CBDA95EFE54D947 (group_id), PRIMARY KEY(chat_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE club_group (club_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_CDAE6E7761190A32 (club_id), INDEX IDX_CDAE6E77FE54D947 (group_id), PRIMARY KEY(club_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event_group (event_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_2CDBF5E971F7E88B (event_id), INDEX IDX_2CDBF5E9FE54D947 (group_id), PRIMARY KEY(event_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fin_group (fin_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_8B676952B9B4C4CA (fin_id), INDEX IDX_8B676952FE54D947 (group_id), PRIMARY KEY(fin_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE leash_group (leash_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_812372CB21A08CF1 (leash_id), INDEX IDX_812372CBFE54D947 (group_id), PRIMARY KEY(leash_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media_group (media_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_72D98074EA9FDD75 (media_id), INDEX IDX_72D98074FE54D947 (group_id), PRIMARY KEY(media_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE session_group (session_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_B6BDFC13613FECDF (session_id), INDEX IDX_B6BDFC13FE54D947 (group_id), PRIMARY KEY(session_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE spot_group (spot_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_4981DAED2DF1D37C (spot_id), INDEX IDX_4981DAEDFE54D947 (group_id), PRIMARY KEY(spot_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE wetsuit_group (wetsuit_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_100AF864A6E1C507 (wetsuit_id), INDEX IDX_100AF864FE54D947 (group_id), PRIMARY KEY(wetsuit_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE accessory_group ADD CONSTRAINT FK_E7B9D46527E8CC78 FOREIGN KEY (accessory_id) REFERENCES `accessory` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE accessory_group ADD CONSTRAINT FK_E7B9D465FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE article_group ADD CONSTRAINT FK_1A7736D47294869C FOREIGN KEY (article_id) REFERENCES `article` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE article_group ADD CONSTRAINT FK_1A7736D4FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE board_group ADD CONSTRAINT FK_CF7DA3EEE7EC5785 FOREIGN KEY (board_id) REFERENCES `board` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE board_group ADD CONSTRAINT FK_CF7DA3EEFE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE chat_group ADD CONSTRAINT FK_6CBDA95E1A9A7125 FOREIGN KEY (chat_id) REFERENCES `chat` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE chat_group ADD CONSTRAINT FK_6CBDA95EFE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE club_group ADD CONSTRAINT FK_CDAE6E7761190A32 FOREIGN KEY (club_id) REFERENCES `club` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE club_group ADD CONSTRAINT FK_CDAE6E77FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_group ADD CONSTRAINT FK_2CDBF5E971F7E88B FOREIGN KEY (event_id) REFERENCES `event` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_group ADD CONSTRAINT FK_2CDBF5E9FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fin_group ADD CONSTRAINT FK_8B676952B9B4C4CA FOREIGN KEY (fin_id) REFERENCES `fin` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fin_group ADD CONSTRAINT FK_8B676952FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE leash_group ADD CONSTRAINT FK_812372CB21A08CF1 FOREIGN KEY (leash_id) REFERENCES `leash` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE leash_group ADD CONSTRAINT FK_812372CBFE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE media_group ADD CONSTRAINT FK_72D98074EA9FDD75 FOREIGN KEY (media_id) REFERENCES `media` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE media_group ADD CONSTRAINT FK_72D98074FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE session_group ADD CONSTRAINT FK_B6BDFC13613FECDF FOREIGN KEY (session_id) REFERENCES `session` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE session_group ADD CONSTRAINT FK_B6BDFC13FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE spot_group ADD CONSTRAINT FK_4981DAED2DF1D37C FOREIGN KEY (spot_id) REFERENCES `spot` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE spot_group ADD CONSTRAINT FK_4981DAEDFE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE wetsuit_group ADD CONSTRAINT FK_100AF864A6E1C507 FOREIGN KEY (wetsuit_id) REFERENCES `wetsuit` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE wetsuit_group ADD CONSTRAINT FK_100AF864FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE accessory ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE article ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE board ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE chat ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE club ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE event ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE leash ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE media ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE session ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE spot ADD visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE wetsuit ADD visibility VARCHAR(255) DEFAULT NULL');        
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE accessory_group DROP FOREIGN KEY FK_E7B9D46527E8CC78');
        $this->addSql('ALTER TABLE accessory_group DROP FOREIGN KEY FK_E7B9D465FE54D947');
        $this->addSql('ALTER TABLE article_group DROP FOREIGN KEY FK_1A7736D47294869C');
        $this->addSql('ALTER TABLE article_group DROP FOREIGN KEY FK_1A7736D4FE54D947');
        $this->addSql('ALTER TABLE board_group DROP FOREIGN KEY FK_CF7DA3EEE7EC5785');
        $this->addSql('ALTER TABLE board_group DROP FOREIGN KEY FK_CF7DA3EEFE54D947');
        $this->addSql('ALTER TABLE chat_group DROP FOREIGN KEY FK_6CBDA95E1A9A7125');
        $this->addSql('ALTER TABLE chat_group DROP FOREIGN KEY FK_6CBDA95EFE54D947');
        $this->addSql('ALTER TABLE club_group DROP FOREIGN KEY FK_CDAE6E7761190A32');
        $this->addSql('ALTER TABLE club_group DROP FOREIGN KEY FK_CDAE6E77FE54D947');
        $this->addSql('ALTER TABLE event_group DROP FOREIGN KEY FK_2CDBF5E971F7E88B');
        $this->addSql('ALTER TABLE event_group DROP FOREIGN KEY FK_2CDBF5E9FE54D947');
        $this->addSql('ALTER TABLE fin_group DROP FOREIGN KEY FK_8B676952B9B4C4CA');
        $this->addSql('ALTER TABLE fin_group DROP FOREIGN KEY FK_8B676952FE54D947');
        $this->addSql('ALTER TABLE leash_group DROP FOREIGN KEY FK_812372CB21A08CF1');
        $this->addSql('ALTER TABLE leash_group DROP FOREIGN KEY FK_812372CBFE54D947');
        $this->addSql('ALTER TABLE media_group DROP FOREIGN KEY FK_72D98074EA9FDD75');
        $this->addSql('ALTER TABLE media_group DROP FOREIGN KEY FK_72D98074FE54D947');
        $this->addSql('ALTER TABLE session_group DROP FOREIGN KEY FK_B6BDFC13613FECDF');
        $this->addSql('ALTER TABLE session_group DROP FOREIGN KEY FK_B6BDFC13FE54D947');
        $this->addSql('ALTER TABLE spot_group DROP FOREIGN KEY FK_4981DAED2DF1D37C');
        $this->addSql('ALTER TABLE spot_group DROP FOREIGN KEY FK_4981DAEDFE54D947');
        $this->addSql('ALTER TABLE wetsuit_group DROP FOREIGN KEY FK_100AF864A6E1C507');
        $this->addSql('ALTER TABLE wetsuit_group DROP FOREIGN KEY FK_100AF864FE54D947');
        $this->addSql('DROP TABLE accessory_group');
        $this->addSql('DROP TABLE article_group');
        $this->addSql('DROP TABLE board_group');
        $this->addSql('DROP TABLE chat_group');
        $this->addSql('DROP TABLE club_group');
        $this->addSql('DROP TABLE event_group');
        $this->addSql('DROP TABLE fin_group');
        $this->addSql('DROP TABLE leash_group');
        $this->addSql('DROP TABLE media_group');
        $this->addSql('DROP TABLE session_group');
        $this->addSql('DROP TABLE spot_group');
        $this->addSql('DROP TABLE wetsuit_group');
        $this->addSql('ALTER TABLE `accessory` DROP visibility');
        $this->addSql('ALTER TABLE `article` DROP visibility');
        $this->addSql('ALTER TABLE `board` DROP visibility');
        $this->addSql('ALTER TABLE `chat` DROP visibility');
        $this->addSql('ALTER TABLE `club` DROP visibility');
        $this->addSql('ALTER TABLE `event` DROP visibility');
        $this->addSql('ALTER TABLE `leash` DROP visibility');
        $this->addSql('ALTER TABLE `media` DROP visibility');
        $this->addSql('ALTER TABLE `session` DROP visibility');
        $this->addSql('ALTER TABLE `spot` DROP visibility');
        $this->addSql('ALTER TABLE `wetsuit` DROP visibility');
    }
}