import bcrypt from "bcrypt"
import { 
    Entity, 
    BaseEntity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate
} from "typeorm";
import { 
    IsEmail, 
    IsInt 
} from "class-validator";

const BCRYPT_POUNDS = 10;

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    @IsInt()
    id: number;

    @Column({ type:"text"})
    name: string;

    @Column({ type:"text"})
    profilePhoto: string;

    @Column({ type:"text", unique:true })
    @IsEmail()
    email: string;

    @Column({ type:"boolean", default:false })
    verifiedEmail: boolean;

    @Column({ type:"text"})
    phoneNumber: string;

    @Column({ type:"boolean", default:false })
    verifiedPhoneNumber: boolean;

    @Column({ type:"text"})
    password: string;

    @CreateDateColumn()
    createAt: string;

    @UpdateDateColumn()
    updateAt: string;

    public compatePassword(password: string): Promise<boolean>{
        return bcrypt.compare(password, this.password)
    }

    @BeforeInsert()
    @BeforeUpdate()
    async savePassword(): Promise<void> {
        if (this.password) {
            const hashedPassword = await this.hashPassword(this.password)
            this.password = hashedPassword
        }
    }

    private hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, BCRYPT_POUNDS)
    }
}

export default User