import bcrypt from "bcrypt"
import { 
    Entity, 
    BaseEntity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    ManyToOne,
    OneToMany
} from "typeorm";
import { 
    IsEmail, 
    IsInt 
} from "class-validator";
import Chat from "./Chat";
import Message from "./Message"
import Verification from "./Verification";

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

    @Column({ type:"text", nullable: true})
    @IsEmail()
    email: string | null;

    @Column({ type:"boolean", default:false })
    verifiedEmail: boolean;

    @Column({ type:"text", nullable : true})
    phoneNumber: string;

    @Column({ type:"boolean", default:false })
    verifiedPhoneNumber: boolean;

    @Column({ type:"text", nullable : true})
    password: string;

    @OneToMany(type => Verification, verification=>verification.user)
    verification: Verification[]

    @Column({ type: "text", nullable:true})
    facebookId: string

    @ManyToOne(type => Chat, chat => chat.participants)
    chat: Chat

    @OneToMany(type=> Message, message => message.user)
    messages: Message[]

    @CreateDateColumn()
    createAt: string;

    @UpdateDateColumn()
    updateAt: string;

    public comparePassword(password: string): Promise<boolean>{
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